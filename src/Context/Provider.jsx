import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchCollection from '../Utils/dataScraper';
import { DEFAULT_URL } from '../Utils/variables';

function AppProvider({ children }) {
  const [collection, setCollection] = useState([]);
  const [lastCalledTime, setLCT] = useState('');
  const [profileURL, setProfileURL] = useState('');

  const context = useMemo(
    () => ({
      collection,
      setCollection,
      lastCalledTime, 
      setLCT,
      profileURL, 
      setProfileURL,
    }),
    [collection]
  );

  useEffect(() => {
    const checkURL = () => {
      const urlFromLocal = localStorage.getItem('profileURL');
      if (urlFromLocal !== null) {
        setProfileURL(urlFromLocal)
      } else {
        setProfileURL(DEFAULT_URL)
      }
    }
    checkURL();
  }, []);

  useEffect(() => {
    const getCollectionData = () => {
      fetchCollection(profileURL, setCollection, lastCalledTime, setLCT)
    }
    getCollectionData();
  }, [profileURL]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
