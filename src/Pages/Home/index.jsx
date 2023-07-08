import React, { useRef, useContext, useState } from "react";
import AppContext from "../../Context/AppContext";
import cardImg from "../../Img/card.png";
import SyncPage from "../SyncPage";
import Footer from "../../Components/Footer";
import DeckBuilder from "../../Components/DeckBuilder";

function Home() {
  const syncSectionRef = useRef(null);
  const [isBuildingDeck, setIsBuildingDeck] = useState(false);
  const [randomDeck, setRandomDeck] = useState([]);
  const { collection } = useContext(AppContext);

  const focusSyncSection = () => {
    syncSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function shuffleDeck(array) {
    let currentIndex = array.length;
    let randomIndex;
    const randomArray = [...array];

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [randomArray[currentIndex], randomArray[randomIndex]] = [
        randomArray[randomIndex],
        randomArray[currentIndex],
      ];
    }

    const selectedCards = randomArray.slice(0, 12);
    setRandomDeck(selectedCards);
  }

  const handleClick = () => {
    shuffleDeck(collection);
    if (isBuildingDeck) {
      setIsBuildingDeck(false);
      setIsBuildingDeck(true);
    }
    setIsBuildingDeck(true);
  };

  return (
    <>
      <section className="flex justify-around bg-gray-1 h-screen">
        <div className="flex flex-col justify-center items-center max-w-screen w-4/12 space-y-16">
          <h2 className="text-violet-1 h2Title">
            Welcome to the ShuffleGenie 👋
          </h2>
          <h1 className="h1Title">Create a new random deck with your cards!</h1>
          <p className="defaultPageText">
            Sync your account Marvel Snap Zone typing your username to start a
            new random deck.
          </p>
          <button
            type="button"
            onClick={focusSyncSection}
            className="defaultButton"
          >
            SYNC YOUR COLLECTION
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <img className="flex max-w-xs max-h-96" src={cardImg} alt="card" />
        </div>
      </section>

      <section>
        <button type="button" onClick={handleClick} className="defaultButton">
          Generate Random Deckzao
        </button>
        {isBuildingDeck && <DeckBuilder userDeck={randomDeck} />}
      </section>

      <section
        ref={syncSectionRef}
        id="sync-section"
        className="flex justify-around bg-gray-2 h-screen"
      >
        <SyncPage />
      </section>
      <Footer />
    </>
  );
}

export default Home;
