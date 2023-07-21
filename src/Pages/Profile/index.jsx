import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import Spinner from '../../Components/Spinner';
// import BackToTopButton from '../../Components/BackToTopButton';

function Profile() {
  const { cardsNum, collection, isLoading, username } = useContext(AppContext);

  return (
    <section className='bg-gray-2'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {collection && (
            <div className='h-96 flex items-start justify-center'>
              <p className='text-gray-text'>{`${username}, thats your collection, you have ${cardsNum} cards!`}</p>
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
