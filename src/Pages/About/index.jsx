import React from 'react';
import kotlarenko from '../../Img/kotlarenko.png';
import kleimpaul from '../../Img/kleimpaul.png';
import cyggnus from '../../Img/Cyggnus.png';

function About() {
  return (
    <section className='flex flex-col justify-center h-screen bg-gray-1'>
      <div>
        <h1 className='h1Title'>Meet Us!</h1>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='rounded-[80px] max-w-[250px]'
            src={kotlarenko}
            alt=''
          />
          <button className='defaultButton mt-2' type='button'>
            LinkedIn
          </button>
        </div>

        <div className='flex flex-col justify-center items-center ml-96'>
          <img
            className='rounded-[80px] max-w-[250px]'
            src={kleimpaul}
            alt=''
          />
          <button className='defaultButton mt-2' type='button'>
            LinkedIn
          </button>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-56'>
        <div className='flex flex-row'>
          <img className='' src={cyggnus} alt='' />
          <p className='ml-4 '>
            Our Cyggnus was founded by Leonardo Kotlarenko and Leonardo
            Kleimpaul; our aim is to create fun and useful open source
            applications.
          </p>
        </div>
        <button className='defaultButton mt-2' type='button'>
          GitHub
        </button>
      </div>
    </section>
  );
}

export default About;
