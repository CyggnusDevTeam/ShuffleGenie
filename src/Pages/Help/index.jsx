import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import LoadingSpinner from '../../Components/LoadingSpinner';
import SyncForm from '../../Components/SyncForm';

function Help() {
  const { isLoading, needSync } = useContext(AppContext);

  return (
    <section className='flex justify-around bg-gray-1 h-screen'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='flex flex-col justify-center itens-center space-y-10 p-6'>
          <p className='defaultPageText'>
            To Sync Your Collection you will need a{' '}
            <a
              href='https://marvelsnapzone.com/login/'
              target='_blank'
              rel='noopener noreferrer'>
              MarvelSnapZone
            </a>{' '}
            account.
          </p>
          <p className='defaultPageText'>
            To use your collection provide your{' '}
            <a
              href='https://marvelsnapzone.com/users/'
              target='_blank'
              rel='noopener noreferrer'>
              MarvelSnapZone
            </a>{' '}
            username bellow then click on &apos;Sync your collection&apos;.
          </p>
          {needSync && (
            <div className='flex justify-center itens-center'>
              <SyncForm />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Help;
