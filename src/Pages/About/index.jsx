import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className='flex flex-col justify-center h-screen my-[5%] bg-gray-1'>
      <div>
        <h1 className='h1Title text-white'>About Us</h1>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='rounded-[80px] max-w-[250px]'
            src='https://github.com/lkotlarenko.png'
            alt=''
          />
          <Link
            to='https://linkedin.com/in/lkotlarenko'
            title="lkotlarenko's LinkedIn"
            target='_blank'
            rel='noopener noreferrer'
            className='navLink'
          >
            <button className='defaultButton mt-2' type='button'>
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>

        <div className='flex flex-col justify-center items-center ml-96'>
          <img
            className='rounded-[80px] max-w-[250px]'
            src='https://github.com/LeonardoKleimpaul.png'
            alt=''
          />
          <Link
            to='https://linkedin.com/in/leonardo-kleimpaul'
            title="Kleimpaul's LinkedIn"
            target='_blank'
            rel='noopener noreferrer'
            className='navLink'
          >
            <button className='defaultButton mt-2' type='button'>
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-56'>
        <div className='flex flex-col justify-center items-center space-y-6'>
          <img
            className='w-32 h-32 rounded-2xl'
            src='https://github.com/Cyggnus.png'
            alt=''
          />
          <p className='defaultPageText'>
            Cyggnus was founded by Leonardo Kotlarenko and Leonardo Kleimpaul;
          </p>
          <p className='defaultPageText'>
            Our aim is to create fun and useful open source applications.
          </p>
        </div>
        <Link
          to='https://github.com/Cyggnus'
          title='Cyggnus Organization'
          target='_blank'
          rel='noopener noreferrer'
          className='navLink'
        >
          <button className='defaultButton mt-2' type='button'>
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default About;
