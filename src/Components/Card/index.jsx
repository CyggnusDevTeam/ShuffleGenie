import React from 'react';
import PropTypes from 'prop-types';

function Card({ cardName, cardImg }) {
  return (
    <div className="inline-block">
      <h2>{cardName}</h2>
      <img className="max-w-sm" src={cardImg} alt={cardName} />
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardImg: PropTypes.string,
}.isRequired;

export default Card;
