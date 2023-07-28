import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import AppContext from '../../Context/AppContext';
import { backToTopAction } from '../../Utils/useBackToTop';
import populateCollectionData from '../../Utils/populateCollectionData';
import { reloadApp } from '../NavBar/handleSync';
import { API_ISSUE_REPORT } from '../../Utils/variables';

function SyncPage() {
  const [isInputFocused, setIsInputFocused] = useState(false);
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

  const handleChangeUser = async (user) => {
    localStorage.setItem('activeUser', user);
    try {
      await populateCollectionData(
        user,
        setCollection,
        setCardsNum,
        setIsLoading,
        lastCalledTime
      );
    } catch (error) {
      setIsLoading(true);
      Swal.fire({
        title: 'Failed to contact our API!',
        icon: 'error',
        text: 'Sorry, something went wrong!',
        html: `<b>If this error persists you can report an issue
          <a target='_blank' rel='noopener noreferrer' href=${API_ISSUE_REPORT}>here.</a>
          </b>`,
        allowOutsideClick: true,
        allowEscapeKey: true,
      }).then((result) => {
        if (result.isDismissed || result.isConfirmed) {
          reloadApp(true, navigate, '/');
        }
      });
      console.error(error);
    }
    setUsername(user);
    setLCT(Date.now());
    setNeedSync(false);
    navigate('/profile');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userFromEvent = event.target.elements.username.value.trim();
    if (!userFromEvent) userFromEvent = 'DefaultPool2';
    backToTopAction();
    handleChangeUser(userFromEvent);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center space-y-10'>
      <div className='flex flex-col w-auto'>
        {isInputFocused && (
          <span className='text-blue-gray-200 text-sm pb-4'>
            (leave blank to use default collection)
          </span>
        )}
        <Input
          variant='standard'
          label='Your Username'
          color='white'
          id='username'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      <button className='defaultButton' type='submit'>
        SYNC COLLECTION
      </button>
    </form>
  );
}

export default SyncPage;
