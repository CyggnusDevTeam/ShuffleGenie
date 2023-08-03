import React, { lazy, Suspense } from 'react';
import { DeckBuilderIProps } from '../../Interfaces/DeckBuilderIProps';
import LoadingSpinner from '../LoadingSpinner';

const Card = lazy(() => import('../Card'));

const DeckBuilder: React.FC<DeckBuilderIProps> = ({ userDeck }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <div className='flex flex-wrap justify-center mx-auto mt-[4%] lg:px-20 md:px-10 px-3'>
      {userDeck &&
        userDeck.map((card) => (
          <Card key={card.name} cardName={card.name} cardImg={card.imgUrl} />
        ))}
    </div>
  </Suspense>
);

export default DeckBuilder;
