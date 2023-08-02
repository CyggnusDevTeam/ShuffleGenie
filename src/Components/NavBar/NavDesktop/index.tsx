import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import {
  faArrowsRotate,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../../Context/AppContext';
import { confirmAlert, handleSync } from '../handleSync';

const NavDesktop: React.FC = () => {
  const { t } = useTranslation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
  };

  const dispatchConfirmAlert = () => {
    confirmAlert(navigate);
  };

  return (
    <nav className='navBar'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <Link to='/' title={t('nav.btnTitle.home')} className='navLink'>
              <h1 className='text-white text-3xl font-bold'>ShuffleGenie</h1>
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <Link to='/help' title={t('nav.btnTitle.help')} className='navLink'>
              {t('nav.link.help')}
            </Link>
            <Link
              to='/about'
              title={t('nav.btnTitle.about')}
              className='navLink'>
              {t('nav.link.about')}
            </Link>
            {!needSync && (
              <button
                type='button'
                onClick={handleClick}
                disabled={isButtonDisabled}
                title={t('nav.btnTitle.sync')}
                className='navLink'>
                <FontAwesomeIcon
                  className='fa-spin-hover'
                  size='lg'
                  icon={faArrowsRotate}
                />
              </button>
            )}
          </div>
          <div className='flex items-center space-x-4'>
            {!needSync && (
              <button
                type='button'
                title={t('nav.btnTitle.profile')}
                onClick={() => navigate('/profile')}
                className='defaultButton'>
                {t('nav.link.profile')}
              </button>
            )}
            {!needSync && (
              <button
                type='button'
                title={t('nav.btnTitle.logout')}
                onClick={() => {
                  dispatchConfirmAlert();
                }}
                className='defaultButton'>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavDesktop;
