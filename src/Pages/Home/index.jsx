import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import Footer from '../../Components/Footer';
import DeckBuilder from '../../Components/DeckBuilder';
import NoUserOutlet from '../../Components/NoUserOutlet';
import shuffleDeck from '../../Utils/shuffler';

function Home() {
  const [isBuildingDeck, setIsBuildingDeck] = useState(false);
  const [randomDeck, setRandomDeck] = useState([]);
  const { collection, needSync } = useContext(AppContext);

  const handleClick = () => {
    setRandomDeck(shuffleDeck(collection));
    if (isBuildingDeck) {
      setIsBuildingDeck(false);
      setIsBuildingDeck(true);
    }
    setIsBuildingDeck(true);
  };

  return (
    <>
      {needSync ? (
        <NoUserOutlet />
      ) : (
        <section>
          <button type="button" onClick={handleClick} className="defaultButton">
            Generate Random Deck
          </button>
          {isBuildingDeck && <DeckBuilder userDeck={randomDeck} />}
        </section>
      )}
      <Footer />
    </>
  );
}

export default Home;
