import { ERROR_TOO_MANY } from './variables';

const { REACT_APP_API_URL } = process.env;

const makeAPIRequest = async (user) => {
  const API_URL = `${REACT_APP_API_URL}${user}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const fetchCollection = async (user, lastCalledTime) => {
  if (lastCalledTime === 'first' || Date.now() - lastCalledTime >= 4000) {
    return makeAPIRequest(user);
  }
  throw Error(ERROR_TOO_MANY);
};

export default fetchCollection;
