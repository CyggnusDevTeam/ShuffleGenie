import React, { useRef } from 'react';
import SyncForm from '../../Components/SyncForm';
import cardImg from '../../Img/cardHome.webp';

function NewUser() {
  const syncSectionRef = useRef(null);
  const focusSyncSection = () => {
    syncSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        className='flex flex-col justify-center items-center mt-[50%] sm:mt-[25%] lg:mt-0 lg:flex-row lg:justify-around bg-gray-1'
        style={{ height: '91vh' }}>
        <div className='flex flex-col justify-center items-center max-w-screen lg:w-4/12 space-y-16 p-4'>
          <h2 className='text-violet-1 text-center lg:mt-0 font-bold text-2xl'>
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
        <div className='flex flex-col justify-center mb-[55%] sm:mb-[25%] md:mb-[25%] lg:mb-0'>
          <img className='flex max-w-xs max-h-96' src={cardImg} alt='card' />
        </div>
      </section>
      <section
        ref={syncSectionRef}
        id='sync-section'
        className='bg-gray-2 flex flex-col justify-center'
        style={{ height: '85vh' }}>
        <SyncForm />
      </section>
    </>
  );
}

export default NewUser;
