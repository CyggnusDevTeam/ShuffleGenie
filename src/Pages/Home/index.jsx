import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import AppContext from '../../Context/AppContext';
import DeckBuilder from '../../Components/DeckBuilder';
import LoadingSpinner from '../../Components/LoadingSpinner';
import NewUser from '../NewUser';
import generateDeckCode from '../../Utils/generateDeckCode';
import { generateRandomName, shuffleDeck } from '../../Utils/shuffler';

function Home() {
  const [deckName, setDeckName] = useState('');
  const [isBuildingDeck, setIsBuildingDeck] = useState(false);
  const [randomDeck, setRandomDeck] = useState([]);
  const { collection, isLoading, needSync } = useContext(AppContext);

  const generateRandomDeck = () => {
    const shuffledDeck = shuffleDeck(collection);
    setRandomDeck(shuffledDeck);
    setIsBuildingDeck(true);
    const randomDeckName = generateRandomName(shuffledDeck);
    setDeckName(randomDeckName);
  };

  const copyDeckCode = () => {
    const deckCode = generateDeckCode(randomDeck, deckName);
    // Copy the deck code to the clipboard
    navigator.clipboard
      .writeText(deckCode)
      .then(() => {
        Swal.fire({
          title: 'Deck code copied to clipboard!',
          icon: 'success',
          allowOutsideClick: true,
          allowEscapeKey: true,
          timer: 2000,
        });
      })
      .catch((err) => {
        console.error('Failed to copy deck code: ', err);
      });
  };

  useEffect(() => {
    if (!isLoading && !needSync) generateRandomDeck();
  }, [isLoading, needSync]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div />
          {needSync ? (
            <NewUser />
          ) : (
            <section className='bg-gray-1'>
              <h3 className='text-sm defaultPageText p-8'>
                Easily generate new random decks using your MarvelSnap©
                collection.
              </h3>
              <div className='flex justify-around flex-col lg:flex-row items-center space-y-4'>
                <button
                  type='button'
                  title='Generate a new random Deck'
                  onClick={generateRandomDeck}
                  className='defaultButton'>
                  New Random Deck
                </button>
                {isBuildingDeck && (
                  <h2 className='defaultPageText'>{deckName}</h2>
                )}
                {isBuildingDeck && (
                  <button
                    type='button'
                    title='Copy Deck Code'
                    onClick={copyDeckCode}
                    className='defaultButton'>
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                )}
              </div>
              {isBuildingDeck && <DeckBuilder userDeck={randomDeck} />}
            </section>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
