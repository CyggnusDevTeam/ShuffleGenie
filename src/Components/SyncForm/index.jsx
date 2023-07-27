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
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center space-y-10'>
      <label htmlFor='username' className='relative mb-2 text-gray-3'>
        Username:
        <input
          type='text'
          name='username'
          id='username'
          defaultValue='DefaultPool2'
          min='2'
          className='peer block w-full min-h-[auto] border border-gray-3 px-2 py-1 rounded-md bg-transparent outline-none transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-3 peer-focus:pl-[0.5rem] peer-focus:text-primary'
          placeholder='Example label'
        />
      </label>
      <button className='defaultButton' type='submit'>
        SYNC COLLECTION
      </button>
    </form>
  );
}

export default SyncPage;
