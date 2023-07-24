import React from 'react';

function Footer() {
  return (
    <footer className='flex lg:flex-row md:flex-col justify-around w-full bg-gray-3 lg:h-48 flex-wrap'>
      <div className='flex flex-col justify-center space-y-3 items-center md:max-w-sm lg:w-1/3'>
        <p className='text-white text-sm font-bold defaultPageText md:py-2 lg:py-0'>
          ShuffleGenie © 2023. All Rights Reserved.
        </p>
        <p className='text-sm defaultPageText md:py-2 lg:py-0'>
          ShuffleGenie is not affiliated with MarvelSnapZone, Nuverse, Second
          Dinner or Marvel.
        </p>
        <p className='text-sm defaultPageText md:py-2 lg:py-0'>
          Collection data is provided by{' '}
          <a
            href='https://marvelsnapzone.com/'
            target='_blank'
            rel='noopener noreferrer'>
            MarvelSnapZone©
          </a>
          .
        </p>
      </div>
      <div className='flex lg:justify-center md:justify-center md:w-full lg:w-1/12'>
        <div className='flex items-center'>
          <h1 className='text-white md:text-sm text-base font-bold'>
            <a
              href='https://github.com/Cyggnus'
              target='_blank'
              rel='noopener noreferrer'>
              Cyggnus
            </a>
          </h1>
          <img
            className='w-10 h-10 rounded-lg ml-2 hidden md:block'
            src='https://github.com/Cyggnus.png'
            alt='Cyggnus Logo'
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
