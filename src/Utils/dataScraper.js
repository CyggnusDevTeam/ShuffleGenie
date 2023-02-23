import { DEFAULT_USER } from './variables';

const { REACT_APP_API_URL } = process.env;

const makeRequest = async (
  user,
  setCollection,
  setLCT,
  setIsLoading,
  setCardsNum
) => {
  setLCT(Date.now());
  const API_URL = `${REACT_APP_API_URL}${user}`;
  if (API_URL === REACT_APP_API_URL) {
    const response = await fetch(`${API_URL}${DEFAULT_USER}`);
    const data = await response.json();
    setCollection(data);
    setCardsNum(data.length + 1);
    setIsLoading(false);
  } else {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCollection(data);
    setCardsNum(data.length + 1);
    setIsLoading(false);
  }
};

const fetchCollection = async (
  user,
  setCollection,
  lastCalledTime,
  setLCT,
  setIsLoading,
  setCardsNum
) => {
  if (lastCalledTime === 'first') {
    await makeRequest(user, setCollection, setLCT, setIsLoading, setCardsNum);
  }
  // Do not call the API too many times
  else if (Date.now() - lastCalledTime >= 4000) {
    await makeRequest(user, setCollection, setLCT, setIsLoading, setCardsNum);
  }
};

export default fetchCollection;
