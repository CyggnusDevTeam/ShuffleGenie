import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import LoadingSpinner from '../../Components/LoadingSpinner';

function Profile() {
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
            <div className='my-[5%] px-3 flex flex-col items-center justify-center'>
              {isDefaultUser ? (
                <h2 className='defaultPageText'>{`Welcome to our app 👽, you are exploring the Default Collection with ${cardsNum} cards! Enjoy the diverse selection of cards from Pool 2 and below.`}</h2>
              ) : (
                <h2 className='defaultPageText'>{`Hi ${username} 👽, here is your snap collection of ${cardsNum} cards!`}</h2>
              )}
              <h3 className='defaultPageText'>
                To generate random decks click{' '}
                <button type='button' onClick={handleRedirectHome}>
                  here
                </button>
                .
              </h3>
            </div>
          )}
          <div className='flex flex-wrap justify-center mx-auto lg:px-20 md:px-10 px-3'>
            {collection &&
              collection.map((card) => (
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
}

export default Profile;
