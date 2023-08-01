import React from 'react';
import { DeckBuilderIProps } from '../../Interfaces/DeckBuilderIProps';
import Card from '../Card';

const DeckBuilder: React.FC<DeckBuilderIProps> = ({ userDeck }) => (
  <div className='flex flex-wrap justify-center mx-auto mt-[4%] lg:px-20 md:px-10 px-3'>
    {userDeck &&
      userDeck.map((card) => (
        <Card key={card.name} cardName={card.name} cardImg={card.imgUrl} />
      ))}
  </div>
);

export default DeckBuilder;
