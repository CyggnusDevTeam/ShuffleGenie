import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import LoadingSpinner from '../../Components/LoadingSpinner';
import { CollectionItem } from '../../Interfaces/CollectionItem';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const { cardsNum, collection, isLoading, needSync, username } =
    useContext(AppContext);
  const isDefaultUser = username === 'DefaultPool2';
  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!isLoading && needSync) handleRedirectHome();
  }, [isLoading]);

  return (
    <section className='bg-gray-1 items-center justify-center'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {collection && (
            <div className='my-[5%] px-3 flex flex-col items-center justify-center space-y-4'>
              {isDefaultUser ? (
                <h2 className='defaultPageText'>
                  {t('profile.greetings.defaultUser', { numCards: cardsNum })}
                </h2>
              ) : (
                <h2 className='defaultPageText'>
                  {t('profile.greetings.loggedUser', {
                    user: username,
                    numCards: cardsNum,
                  })}
                </h2>
              )}
              <h3 className='defaultPageText'>
                {t('profile.info.part1')}
                <button
                  className='text-violet-1'
                  type='button'
                  title={t('nav.btnTitle.home')}
                  onClick={handleRedirectHome}>
                  {t('profile.info.part2')}
                </button>
                .
              </h3>
            </div>
          )}
          <div className='flex flex-wrap justify-center mx-auto lg:px-20 md:px-10 px-3'>
            {collection &&
              collection.map((card: CollectionItem) => (
                <Card
                  key={card.name}
                  cardName={card.name}
                  cardImg={card.imgUrl}
                />
              ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Profile;
