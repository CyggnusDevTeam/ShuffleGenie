import React from 'react';
import svgError from '../../Img/404Error.svg';

function NoPage() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-1 h-screen'>
      <img className='max-w-xs' src={svgError} alt='error 404' />
      <h1 className='h1Title text-5xl'>404 this page does not exist!</h1>
    </div>
  );
}

export default NoPage;
