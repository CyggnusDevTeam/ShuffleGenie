import React, { useRef } from "react";
import cardImg from "../../Img/card.png";
import SyncPage from "../SyncPage";

function Home() {
  const syncSectionRef = useRef(null);

  const focusSyncSection = () => {
    syncSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="flex justify-around bg-gray-1 h-screen">
        <div className="flex flex-col justify-center items-center max-w-screen w-4/12 space-y-16">
          <h2 className="text-violet-1 font-bold text-3xl">
            Welcome to the ShuffleGenie 👋
          </h2>
          <h1 className="text-gray-text text-center font-bold text-6xl">
            Create a new random deck with your cards!
          </h1>
          <h4 className="text-gray-text text-center font-bold text-lg">
            Sync your account Marvel Snap Zone typing your username to start a
            new random deck.
          </h4>
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

      <section
        ref={syncSectionRef}
        id="sync-section"
        className="flex justify-around bg-gray-2 h-screen"
      >
        <SyncPage />
      </section>
    </>
  );
}

export default Home;
