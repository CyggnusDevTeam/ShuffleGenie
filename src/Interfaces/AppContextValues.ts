import React from 'react';
import { CollectionItem } from './CollectionItem';

export interface AppContextValues {
  cardsNum: number;
  setCardsNum: React.Dispatch<React.SetStateAction<number>>;
  collection: CollectionItem[];
  setCollection: React.Dispatch<React.SetStateAction<CollectionItem[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  lastCalledTime: string | number;
  setLCT: React.Dispatch<React.SetStateAction<string>>;
  needSync: boolean;
  setNeedSync: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}
