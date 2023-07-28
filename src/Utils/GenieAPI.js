import { ERROR_FAILED_COLLECTION, ERROR_TOO_MANY } from './variables';

const { REACT_APP_API_URL } = process.env;

const makeAPIRequest = async (user) => {
  try {
    const API_URL = `${REACT_APP_API_URL}?user=${user}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(ERROR_FAILED_COLLECTION);
  }
};

const fetchCollection = async (user, lastCalledTime) => {
  if (lastCalledTime === 'first' || Date.now() - lastCalledTime >= 4000) {
    return makeAPIRequest(user);
  }
  throw Error(ERROR_TOO_MANY);
};

export default fetchCollection;
