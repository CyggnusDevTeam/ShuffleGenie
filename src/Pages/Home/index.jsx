import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import AppContext from '../../Context/AppContext';
import DeckBuilder from '../../Components/DeckBuilder';
import NoUserOutlet from '../../Components/NoUserOutlet';
import generateDeckCode from '../../Utils/generateDeckCode';
import shuffleDeck from '../../Utils/shuffler';

function Home() {
  const [isBuildingDeck, setIsBuildingDeck] = useState(false);
  const [randomDeck, setRandomDeck] = useState([]);
  const { collection, needSync } = useContext(AppContext);

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
    generateRandomDeck();
  }, []);

  return (
    <>
      <div />
      {needSync ? (
        <NoUserOutlet />
      ) : (
        <section className='h-screen bg-gray-1 mt-[5%]'>
          <div className='flex flex-col justify-center items-center'>
            <button
              type='button'
              title='Generate a new random Deck'
              onClick={generateRandomDeck}
              className='defaultButton'
            >
              New Random Deck
            </button>
            {isBuildingDeck && <DeckBuilder userDeck={randomDeck} />}
          </div>

          <div className='flex flex-col justify-center items-center'>
            {isBuildingDeck && (
              <button
                type='button'
                title='Copy Deck Code'
                onClick={copyDeckCode}
                className='defaultButton'
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
