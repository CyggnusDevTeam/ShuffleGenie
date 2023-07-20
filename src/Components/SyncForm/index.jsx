import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import populateCollectionData from '../../Utils/populateCollectionData';

function SyncPage() {
  const {
    lastCalledTime,
    setCardsNum,
    setCollection,
    setIsLoading,
    setLCT,
    setNeedSync,
    setUsername,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChangeUser = (user) => {
    localStorage.setItem('activeUser', user);
    populateCollectionData(
      user,
      setCollection,
      setCardsNum,
      setIsLoading,
      lastCalledTime
    );
    setUsername(user);
    setLCT(Date.now());
    setNeedSync(false);
    navigate('/profile');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userFromEvent = event.target.elements.username.value;
    handleChangeUser(userFromEvent);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="username" className="mb-2 text-gray-text">
        Username:
        <input
          type="text"
          name="username"
          id="username"
          defaultValue="DefaultPool2"
          min="2"
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </label>
      <button className="defaultButton" type="submit">
        SYNC COLLECTION
      </button>
    </form>
  );
}

export default SyncPage;
