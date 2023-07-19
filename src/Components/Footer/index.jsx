import React from 'react';
import cyggnusLogo from '../../Img/Cyggnus.png';

function Footer() {
  return (
    <footer className='flex justify-around bottom-0  bg-gray-3 h-60'>
      <div className='flex flex-col justify-center space-y-4 items-center'>
        <h1 className='text-white text-3xl font-bold'>ShuffleGenie</h1>
        <p className='text-base defaultPageText'>@2023 - ShuffleGenie.</p>
        <p className='text-base defaultPageText'>All rights reserved.</p>
      </div>
      <div className='flex justify-center w-72 space-x-4 items-center'>
        <p className='text-white font-medium text-base defaultPageText'>
          This website Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Fugit earum nemo labore aspernatur iusto consectetur quis expedita
          vitae, suscipit esse.
        </p>
      </div>
      <div className='flex justify-center space-x-4 items-center'>
        <img className='w-12 rounded-lg' src={cyggnusLogo} alt='' />
        <div className='flex flex-col space-y-4 items-center'>
          <h1 className='text-white text-3xl font-bold'>Cyggnus</h1>
          <p className='text-base defaultPageText'>
            Meet our organization on Github.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
