import { ERROR_FAILED_COLLECTION, ERROR_TOO_MANY } from './variables';

const SHUFFLE_API_URL = import.meta.env.VITE_SHUFFLE_API_URL;

const makeAPIRequest = async (user: string): Promise<any> => {
  try {
    const API_URL = `${SHUFFLE_API_URL}?user=${user}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(ERROR_FAILED_COLLECTION);
  }
};

const fetchCollection = async (
  user: string,
  lastCalledTime: number | string
): Promise<any> => {
  if (
    lastCalledTime === 'first' ||
    (typeof lastCalledTime === 'number' && Date.now() - lastCalledTime >= 4000)
  ) {
    return makeAPIRequest(user);
  }
  throw Error(ERROR_TOO_MANY);
};

export default fetchCollection;
