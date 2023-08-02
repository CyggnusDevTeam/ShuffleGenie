import React, { useContext, useState, useEffect } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import AppContext from '../../Context/AppContext';
import DeckBuilder from '../../Components/DeckBuilder';
import LoadingSpinner from '../../Components/LoadingSpinner';
import NewUser from '../NewUser';
import generateDeckCode from '../../Utils/generateDeckCode';
import { generateRandomName, shuffleDeck } from '../../Utils/shuffler';
import { CollectionItem } from '../../Interfaces/CollectionItem';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [deckName, setDeckName] = useState('');
  const [isBuildingDeck, setIsBuildingDeck] = useState(false);
  const [randomDeck, setRandomDeck] = useState<CollectionItem[]>([]);
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

    navigator.clipboard
      .writeText(deckCode)
      .then(() => {
        Swal.fire({
          title: t('home.copy.deckCopied'),
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
              <h3 className='text-sm defaultPageText p-8'>{t('home.intro')}</h3>
              <div className='flex justify-around flex-col lg:flex-row items-center space-y-4'>
                <button
                  type='button'
                  title={t('home.randomDeckBtn.title')}
                  onClick={generateRandomDeck}
                  className='defaultButton'>
                  {t('home.randomDeckBtn.text')}
                </button>
                {isBuildingDeck && (
                  <h2 className='defaultPageText'>{deckName}</h2>
                )}
                {isBuildingDeck && (
                  <button
                    type='button'
                    title={t('home.copy.title')}
                    onClick={copyDeckCode}
                    className='defaultButton'>
                    <ClipboardDocumentIcon className='h-5 w-5' />
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
};

export default Home;
