import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AppContext from './AppContext';
import { CollectionItem } from '../Interfaces/CollectionItem';
import { AppContextValues } from '../Interfaces/AppContextValues';

function AppProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [cardsNum, setCardsNum] = useState<number>(0);
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastCalledTime, setLCT] = useState<string>('first');
  const [needSync, setNeedSync] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');

  const context: AppContextValues = useMemo(
    () => ({
      cardsNum,
      setCardsNum,
      collection,
      setCollection,
      isLoading,
      setIsLoading,
      lastCalledTime,
      setLCT,
      needSync,
      setNeedSync,
      username,
      setUsername,
    }),
    [cardsNum, collection, isLoading, lastCalledTime, needSync, username]
  );

  const retrieveUserFromLocalStorage = () => {
    const usrFromLocal = localStorage.getItem('activeUser');
    const storedCollection = localStorage.getItem('collection');
    const savedLanguage = localStorage.getItem('userLang');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
    if (!savedLanguage) {
      const detectedLanguage = i18n.language;
      i18n.changeLanguage(detectedLanguage);
    }
    if (usrFromLocal !== null && usrFromLocal !== '') {
      setUsername(usrFromLocal);
    }
    if (storedCollection) {
      const parsedCollection: { numOfCards: number; data: CollectionItem[] } =
        JSON.parse(storedCollection);
      const { numOfCards, data } = parsedCollection;
      setCardsNum(numOfCards);
      setCollection(data);
      setNeedSync(false);
    }
  };

  useEffect(() => {
    retrieveUserFromLocalStorage();
    setIsLoading(false);
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
