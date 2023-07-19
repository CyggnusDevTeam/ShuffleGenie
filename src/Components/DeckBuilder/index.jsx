import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

function DeckBuilder({ userDeck }) {
  return (
    <div className='flex flex-wrap justify-center mx-auto px-20'>
      {userDeck &&
        userDeck.map((card) => (
          <Card key={card.name} cardName={card.name} cardImg={card.imgUrl} />
        ))}
    </div>
  );
}

DeckBuilder.propTypes = {
  userDeck: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DeckBuilder;
