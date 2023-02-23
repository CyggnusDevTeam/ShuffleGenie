import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import './Home.css';
import Card from '../../Components/Card';
import Spinner from '../../Components/Spinner';

function Home() {
  const { collection, isLoading, cardsNum } = useContext(AppContext);

  return (
    <div>
      {isLoading && <Spinner />}
      {collection && <p>{`You have ${cardsNum} cards on your collection!`}</p>}
      {collection &&
        collection.map((card) => (
          <Card key={card.name} cardName={card.name} cardImg={card.imgUrl} />
        ))}
    </div>
  );
}

export default Home;
