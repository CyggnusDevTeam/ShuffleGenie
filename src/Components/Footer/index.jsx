import React from 'react';

function Footer() {
  return (
    <footer className='flex justify-around bottom-0 w-full bg-gray-3 h-48'>
      <div className='flex flex-col justify-center space-y-4 items-center'>
        <p className='text-white text-base font-bold defaultPageText'>
          ShuffleGenie © 2023. All Rights Reserved.
        </p>
        <p className='text-base defaultPageText'>
          ShuffleGenie is not affiliated with MarvelSnapZone, Nuverse, Second
          Dinner or Marvel.
        </p>
        <p className='text-base defaultPageText'>
          Collection data is provided by{' '}
          <a
            href='https://marvelsnapzone.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            MarvelSnapZone©
          </a>
          .
        </p>
      </div>
      <div className='flex justify-center w-72 space-x-4 items-center'>
        <h4 className='text-white font-medium text-base defaultPageText'>
          Easily generate new random decks using your MarvelSnap© collection.
        </h4>
      </div>
      <div className='flex justify-center space-x-4 items-center'>
        <img
          className='w-12 rounded-lg'
          src='https://github.com/Cyggnus.png'
          alt='Cyggnus Logo'
        />
        <div className='flex flex-col space-y-4 items-center'>
          <h1 className='text-white text-3xl font-bold'>
            <a
              href='https://github.com/Cyggnus'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cyggnus
            </a>
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
