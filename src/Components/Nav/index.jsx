import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const handleClick = () => {
    setIsButtonDisabled(true);
    try {
      populateCollectionData(
        username,
        setCollection,
        setCardsNum,
        setIsLoading,
        lastCalledTime
      );
      setAPIError(false);
    } catch (error) {
      setAPIError(true);
    }
    setLCT(Date.now());
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 30000);
  };

  const navigate = useNavigate();

  return (
    <nav className='bg-gray-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <Link to='/' className='navLink'>
              <h1 className='text-white text-3xl font-bold'>ShuffleGenie</h1>
            </Link>
          </div>
          <div className='flex items-center'>
            <ul className='flex space-x-4'>
              {!needSync && (
                <li>
                  <Link to='/profile' className='navLink'>
                    <button
                      type='button'
                      onClick={handleClick}
                      disabled={isButtonDisabled}
                    >
                      ReSync
                    </button>
                  </Link>
                </li>
              )}
              {APIError && <p className='text-red'>Failed to contact API!</p>}
              <li>
                <Link to='/help' className='navLink'>
                  Help
                </Link>
              </li>
              <li>
                <Link to='/about' className='navLink'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {!needSync && (
              <button
                type='button'
                onClick={() => navigate('/profile')}
                className='defaultButton'
              >
                Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
