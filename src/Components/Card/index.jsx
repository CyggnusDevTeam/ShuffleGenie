import React from 'react';
import PropTypes from 'prop-types';

function Card({ cardName, cardImg }) {
  return (
    <div className='inline-block relative group'>
      <h2 className='text-gray-text text-center'>{cardName}</h2>
      <img
        className='max-w-[300px] max-h-[300px] transition-transform duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105'
        src={cardImg}
        alt={cardName}
      />
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardImg: PropTypes.string,
}.isRequired;

export default Card;
