import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Card from '../../Components/Card';
import Spinner from '../../Components/Spinner';

function DeckPage() {
  const { collection, isLoading, cardsNum, username } = useContext(AppContext);

  return (
    <section className='bg-gray-2'>
      {isLoading && <Spinner />}
      {collection && <p className='text-gray-text'>{`${username}, you have ${cardsNum} cards on your collection!`}</p>}
      {collection &&
        collection.map((card) => (
          <Card key={card.name} cardName={card.name} cardImg={card.imgUrl} />
        ))}
    </section>
  );
}

export default DeckPage;
