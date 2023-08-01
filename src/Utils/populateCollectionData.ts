import { SetStateAction, Dispatch } from 'react';
import fetchCollection from './GenieAPI';
import { ERROR_FAILED_COLLECTION } from './variables';
import { CollectionItem } from '../Interfaces/CollectionItem';

const populateCollectionData = async (
  user: string,
  setCollection: Dispatch<SetStateAction<CollectionItem[]>>,
  setCardsNum: Dispatch<SetStateAction<number>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  lastCalledTime: number | string
): Promise<void> => {
  setIsLoading(true);
  try {
    const data = await fetchCollection(user, lastCalledTime);
    if (data === '' || data.length === 0) {
      throw new Error(ERROR_FAILED_COLLECTION);
    }
    const numOfCards = data.length;
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
