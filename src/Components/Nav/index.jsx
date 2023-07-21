import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsRotate,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../Context/AppContext';
import populateCollectionData from '../../Utils/populateCollectionData';

function Nav() {
  const {
    lastCalledTime,
    needSync,
    setCardsNum,
    setCollection,
    setIsLoading,
    setLCT,
    username,
  } = useContext(AppContext);
  const [APIError, setAPIError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const reloadApp = (logOut, route) => {
    if (logOut) localStorage.clear();
    navigate(route);
    window.location.reload();
  };

  const handleClick = async () => {
    setIsButtonDisabled(true);
    try {
      await populateCollectionData(
        username,
        setCollection,
        setCardsNum,
        setIsLoading,
        lastCalledTime
      );
      setAPIError(false);
      Swal.fire({
        title: 'Synchronized with success!',
        icon: 'success',
        allowOutsideClick: true,
        allowEscapeKey: true,
        timer: 2000,
      }).then((result) => {
        if (result.isDismissed) {
          reloadApp(false, '/profile');
        }
        if (result.isConfirmed) {
          reloadApp(false, '/profile');
        }
      });
    } catch (error) {
      setAPIError(true);
    }
    setLCT(Date.now());
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 30000);
  };

  function confirmAlert() {
    Swal.fire({
      title: 'LogOut',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      allowOutsideClick: true,
      allowEscapeKey: true,
    }).then((result) => {
      if (result.isConfirmed) {
        reloadApp(true, '/');
      }
    });
  }

  return (
    <nav className='bg-gray-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <Link to='/' title='Home' className='navLink'>
              <h1 className='text-white text-3xl font-bold'>ShuffleGenie</h1>
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            {!needSync && (
              <button
                type='button'
                onClick={handleClick}
                disabled={isButtonDisabled}
                title='ReSync Your Collection'
                className='defaultButton'
              >
                <FontAwesomeIcon
                  className='fa-spin-hover'
                  icon={faArrowsRotate}
                />
              </button>
            )}
            {APIError && <p className='text-red-500'>Failed to contact API!</p>}
            <Link to='/help' title='Go to help page' className='navLink'>
              Help
            </Link>
            <Link to='/about' title='Go to about us page' className='navLink'>
              About Us
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            {!needSync && (
              <button
                type='button'
                title='Go to profile'
                onClick={() => navigate('/profile')}
                className='defaultButton'
              >
                Profile
              </button>
            )}
            {!needSync && (
              <button
                type='button'
                title='LogOut'
                onClick={() => {
                  confirmAlert();
                }}
                className='defaultButton'
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
