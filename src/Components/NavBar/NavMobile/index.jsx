import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsRotate,
  faRightFromBracket,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../../Context/AppContext';
import { confirmAlert, handleSync } from '../handleSync';

function NavMobile() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    lastCalledTime,
    needSync,
    setCardsNum,
    setCollection,
    setIsLoading,
    setLCT,
    username,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsLoading(true);
    handleSync(
      setIsButtonDisabled,
      setLCT,
      lastCalledTime,
      setCardsNum,
      setCollection,
      setIsLoading,
      username,
      navigate
    );
    handleLinkClick();
  };

  const dispatchConfimAlert = () => {
    confirmAlert(navigate);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <nav className={`${isOpen ? 'navBar fixed z-50' : 'navBar'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 relative'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <Link
              to='/'
              onClick={handleLinkClick}
              title='Home'
              className='navLink'>
              <h1 className='text-white text-3xl font-bold'>ShuffleGenie</h1>
            </Link>
          </div>
          <button
            className='hamburger-btn text-white navLink'
            type='button'
            onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={faBars}
              size='2xl'
              style={{ color: '#9b51e0' }}
            />
          </button>
          <div
            id='hamburger-items'
            className={`${
              isOpen
                ? 'flex flex-col items-start space-y-7 pt-12 fixed top-20 right-0 bg-violet-1 w-full h-screen shadow-md z-50'
                : 'hidden'
            }`}>
            <div className='w-full'>
              <Link
                to='/'
                title='Go to Home'
                className='navLink block w-full'
                onClick={handleLinkClick}>
                Home
              </Link>
            </div>
            <div className='w-full'>
              <Link
                to='/help'
                title='Go to help page'
                className='navLink block w-full'
                onClick={handleLinkClick}>
                Help
              </Link>
            </div>
            <div className='w-full'>
              <Link
                to='/about'
                title='Go to about us page'
                className='navLink block w-full'
                onClick={handleLinkClick}>
                About Us
              </Link>
            </div>
            {!needSync && (
              <div className='w-full'>
                <button
                  type='button'
                  onClick={handleClick}
                  disabled={isButtonDisabled}
                  title='ReSync Your Collection'
                  className='navLink block w-full'>
                  ReSync
                  <FontAwesomeIcon
                    className='pl-2'
                    size='md'
                    icon={faArrowsRotate}
                  />
                </button>
              </div>
            )}
            {!needSync && (
              <div className='w-full'>
                <button
                  type='button'
                  title='Go to profile'
                  onClick={() => {
                    navigate('/profile');
                    handleLinkClick();
                  }}
                  className='navLink block w-full'>
                  Profile
                </button>
              </div>
            )}
            {!needSync && (
              <div className='w-full'>
                <button
                  type='button'
                  title='LogOut'
                  onClick={() => {
                    dispatchConfimAlert();
                    handleLinkClick();
                  }}
                  className='navLink block w-full'>
                  LogOut
                  <FontAwesomeIcon
                    className='pl-2'
                    size='sm'
                    icon={faRightFromBracket}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;
