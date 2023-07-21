import React, { useState } from 'react';
import PropTypes from 'prop-types';
import lazyCard from '../../Img/lazyCard.webp';

function Card({ cardName, cardImg }) {
  const convertToSlug = (inputString) =>
    inputString.toLowerCase().replace(/\s+/g, '-');

  // State to track whether the actual image is loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handler function for when the actual image is loaded
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='inline-block relative group mb-14'>
      <h2 className='text-white text-center font-bold text-lg'>{cardName}</h2>
      <a
        href={`https://marvelsnapzone.com/cards/${convertToSlug(cardName)}`}
        target='_blank'
        rel='noopener noreferrer'
        title={`View ${cardName} on MarvelSnapZone©`}>
        {!imageLoaded && (
          <img
            className='max-w-[300px] max-h-[300px] cursor-pointer transition-transform duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105'
            src={lazyCard}
            alt={cardName}
          />
        )}
        <img
          className={`max-w-[300px] max-h-[300px] cursor-pointer transition-transform duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105 ${
            !imageLoaded ? 'hidden' : ''
          }`}
          src={cardImg}
          alt={cardName}
          onLoad={handleImageLoad}
        />
      </a>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardImg: PropTypes.string,
}.isRequired;

export default Card;
