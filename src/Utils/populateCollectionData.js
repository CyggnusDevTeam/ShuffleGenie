import fetchCollection from './GenieAPI';
import { ERROR_FAILED_COLLECTION } from './variables';

const populateCollectionData = async (
  user,
  setCollection,
  setCardsNum,
  setIsLoading,
  lastCalledTime
) => {
  setIsLoading(true);
  try {
    const data = await fetchCollection(user, lastCalledTime);
    if (data === '' || data.length === 0) {
      throw new Error(ERROR_FAILED_COLLECTION);
    }
    const numOfCards = data.length + 1;
    const collectionData = JSON.stringify({ user, numOfCards, data });
    localStorage.setItem('collection', collectionData);
    setCollection(data);
    setCardsNum(numOfCards);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    throw new Error(ERROR_FAILED_COLLECTION);
  }
};

export default populateCollectionData;
