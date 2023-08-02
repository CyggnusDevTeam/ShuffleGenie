import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppContext from '../../Context/AppContext';
import LoadingSpinner from '../../Components/LoadingSpinner';
import SyncForm from '../../Components/SyncForm';

const Help: React.FC = () => {
  const { t } = useTranslation();
  const { isLoading, needSync } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate('/');
  };

  return (
    <section className='flex justify-around bg-gray-1 h-screen'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='flex flex-col justify-center itens-center space-y-10 p-6'>
          {!needSync && (
            <h3 className='defaultPageText'>
              {t('help.description')}
              <button
                className='text-violet-1'
                type='button'
                onClick={handleRedirectHome}>
                {t('help.button')}
              </button>
              .
            </h3>
          )}
          {needSync && (
            <div className='flex flex-col justify-center itens-center space-y-14'>
              <p className='defaultPageText'>
                {t('help.newUserDesc1.part1')}
                <a
                  href='https://marvelsnapzone.com/login/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  MarvelSnapZone
                </a>
                {t('help.newUserDesc1.part2')}
              </p>
              <p className='defaultPageText'>
                {t('help.newUserDesc2.part1')}
                <a
                  href='https://marvelsnapzone.com/users/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  MarvelSnapZone
                </a>
                {t('help.newUserDesc2.part2')}
              </p>
              <p className='defaultPageText'>{t('help.newUserDesc2.part3')}</p>
              <SyncForm />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Help;
