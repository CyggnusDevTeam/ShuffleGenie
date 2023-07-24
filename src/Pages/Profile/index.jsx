import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import Spinner from '../../Components/Spinner';

function Profile() {
  const { cardsNum, collection, isLoading, username } = useContext(AppContext);
  const isDefaultUser = username === 'DefaultPool2';

  return (
    <section className='bg-gray-1'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {collection && (
            <div className='my-[5%] flex items-start justify-center'>
              {isDefaultUser ? (
                <h2 className='defaultPageText'>{`Welcome to our app👽, you are exploring the Default Collection with ${cardsNum} cards! Enjoy the diverse selection of cards from Pool 2 and below.`}</h2>
              ) : (
                <h2 className='defaultPageText'>{`Hi ${username}👽, here is your snap collection of ${cardsNum} cards!`}</h2>
              )}
            </div>
          )}
          <div className='flex flex-wrap justify-center mx-auto px-20'>
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
