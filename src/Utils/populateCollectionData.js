import fetchCollection from './GenieAPI';

const populateCollectionData = async (user, setCollection, setCardsNum, setIsLoading, lastCalledTime) => {
  setIsLoading(true);
  try {
    const data = await fetchCollection(user, lastCalledTime);
    const numOfCards = data.length + 1;
    const collectionData = JSON.stringify({ user, numOfCards, data });
    localStorage.setItem('collection', collectionData);
    setCollection(data);
    setCardsNum(numOfCards);
    setIsLoading(false);
  } catch (error) {
    console.error(error.message);
  }
};

export default populateCollectionData;
