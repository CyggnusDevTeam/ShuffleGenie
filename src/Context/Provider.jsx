import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [cardsNum, setCardsNum] = useState(0);
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastCalledTime, setLCT] = useState('first');
  const [needSync, setNeedSync] = useState(true);
  const [username, setUsername] = useState('');

  const context = useMemo(
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
    [collection]
  );

  const retrieveUserFromLocalStorage = () => {
    const usrFromLocal = localStorage.getItem('activeUser');
    const storedCollection = localStorage.getItem('collection');
    if (usrFromLocal !== '') {
      setUsername(usrFromLocal);
    }
    if (storedCollection) {
      const parsedCollection = JSON.parse(storedCollection);
      const { numOfCards, data } = parsedCollection;
      setCardsNum(numOfCards);
      setCollection(data);
      setNeedSync(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    retrieveUserFromLocalStorage();
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
