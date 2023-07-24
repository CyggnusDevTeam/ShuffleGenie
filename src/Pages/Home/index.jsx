import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import AppContext from '../../Context/AppContext';
import DeckBuilder from '../../Components/DeckBuilder';
import NewUser from '../NewUser';
import generateDeckCode from '../../Utils/generateDeckCode';
import shuffleDeck from '../../Utils/shuffler';

function Home() {
  const [isBuildingDeck, setIsBuildingDeck] = useState(false);
  const [randomDeck, setRandomDeck] = useState([]);
  const { collection, isLoading, needSync } = useContext(AppContext);

  const generateRandomDeck = () => {
    setRandomDeck(shuffleDeck(collection));
    setIsBuildingDeck(true);
  };

  const copyDeckCode = () => {
    const deckCode = generateDeckCode(randomDeck);
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
      {!isLoading && (
        <>
          <div />
          {needSync ? (
            <NewUser />
          ) : (
            <section className='bg-gray-1 mt-[5%]'>
              <div className='flex flex-col justify-center items-center space-y-2'>
                <h4 className='text-white font-medium text-sm defaultPageText md:py-2 lg:py-0'>
                  Easily generate new random decks using your MarvelSnap©
                  collection.
                </h4>
                <button
                  type='button'
                  title='Generate a new random Deck'
                  onClick={generateRandomDeck}
                  className='defaultButton'>
                  New Random Deck
                </button>
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
