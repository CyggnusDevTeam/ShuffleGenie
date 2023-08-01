import React, { useState } from 'react';
import PropTypes from 'prop-types';
import lazyCard from '../../Img/lazyCard.webp';
import { CardIProps } from '../../Interfaces/CardIProps';

const Card: React.FC<CardIProps> = ({ cardName, cardImg }) => {
  const convertToSlug = (inputString: string) =>
    inputString.toLowerCase().replace(/\s+/g, '-');

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

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
            className='lg:max-w-[230px] lg:max-h-[230px] md:max-w-[140px] md:max-h-[140px] max-w-[140px] max-h-[140px] cursor-pointer transition-transform duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105'
            src={lazyCard}
            alt={cardName}
          />
        )}
        <img
          className={`lg:max-w-[230px] lg:max-h-[230px] md:max-w-[140px] md:max-h-[140px] max-w-[140px] max-h-[140px] cursor-pointer transition-transform duration-300 transform-gpu group-hover:-translate-y-1 group-hover:scale-105 ${
            !imageLoaded ? 'hidden' : ''
          }`}
          src={cardImg}
          alt={cardName}
          onLoad={handleImageLoad}
        />
      </a>
    </div>
  );
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImg: PropTypes.string.isRequired,
};

export default Card;
