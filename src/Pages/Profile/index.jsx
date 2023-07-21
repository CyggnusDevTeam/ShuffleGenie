import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import Spinner from '../../Components/Spinner';

function Profile() {
  const { cardsNum, collection, isLoading, username } = useContext(AppContext);

  return (
    <section className='bg-gray-1'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {collection && (
            <div className='my-[5%] flex items-start justify-center'>
              <h2 className='defaultPageText'>{`${username}, thats your collection, you have ${cardsNum} cards!`}</h2>
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
