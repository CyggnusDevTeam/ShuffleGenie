import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchCollection from '../Utils/dataScraper';
import { DEFAULT_USER } from '../Utils/variables';

function AppProvider({ children }) {
  const [collection, setCollection] = useState([]);
  const [lastCalledTime, setLCT] = useState('first');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [cardsNum, setCardsNum] = useState(0);

  const context = useMemo(
    () => ({
      collection,
      setCollection,
      lastCalledTime,
      setLCT,
      username,
      setUsername,
      isLoading,
      setIsLoading,
      cardsNum,
      setCardsNum,
    }),
    [collection]
  );

  const checkUser = () => {
    const usrFromLocal = localStorage.getItem('username');
    if (usrFromLocal !== null) {
      if (usrFromLocal !== username) {
        setUsername(usrFromLocal);
      }
    } else {
      setUsername(DEFAULT_USER);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const getCollectionData = () => {
      let usrName = username;
      if (usrName === '') usrName = localStorage.getItem('username');
      setIsLoading(true);
      fetchCollection(
        usrName,
        setCollection,
        lastCalledTime,
        setLCT,
        setIsLoading
      );
      setCardsNum(collection.length + 1);
    };
    getCollectionData();
  }, [username]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
