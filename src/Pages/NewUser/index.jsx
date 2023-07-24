import React, { useRef } from 'react';
import SyncForm from '../../Components/SyncForm';
import cardImg from '../../Img/card.png';

function NewUser() {
  const syncSectionRef = useRef(null);
  const focusSyncSection = () => {
    syncSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className='flex justify-around bg-gray-1 h-screen'>
        <div className='flex flex-col justify-center items-center max-w-screen w-4/12 space-y-16'>
          <h2 className='text-violet-1 h2Title'>
            Welcome to the ShuffleGenie 👋
          </h2>
          <h1 className='h1Title'>
            Create a new random deck with your owned collection cards!
          </h1>
          <p className='defaultPageText'>
            Sync your Marvel Snap Zone account username to generate a new
            completely random deck with cards from your snap collection.
          </p>
          <button
            type='button'
            onClick={focusSyncSection}
            className='defaultButton'>
            SYNC YOUR COLLECTION
          </button>
        </div>
        <div className='flex flex-col justify-center'>
          <img className='flex max-w-xs max-h-96' src={cardImg} alt='card' />
        </div>
      </section>
      <section
        ref={syncSectionRef}
        id='sync-section'
        className='bg-gray-2 h-96 flex flex-col justify-center'>
        <SyncForm />
      </section>
    </>
  );
}

export default NewUser;
