import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import LoadingSpinner from '../../Components/LoadingSpinner';

const About: React.FC = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <div />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className='flex flex-col justify-center my-[5%] bg-gray-1'>
          <div>
            <h1 className='h1Title text-white mb-14'>About Us</h1>
          </div>

          <div className='flex flex-col justify-center space-y-8 lg:flex-row lg:space-x-80'>
            <div className='flex flex-col justify-center items-center space-y-4'>
              <img
                className='rounded-[50px] max-w-[180px] md:rounded-[80px] md:max-w-[250px]'
                src='https://github.com/lkotlarenko.png'
                alt='Leonardo Kotlarenko'
                loading='lazy'
              />
              <p className='defaultPageText'>Leonardo Kotlarenko</p>
              <Link
                to='https://linkedin.com/in/lkotlarenko'
                title="lkotlarenko's LinkedIn"
                target='_blank'
                rel='noopener noreferrer'
                className='navLink'>
                <button className='defaultButton mt-2' type='button'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </Link>
            </div>

            <div className='flex flex-col justify-center items-center space-y-4'>
              <img
                className='rounded-[50px] max-w-[180px] md:rounded-[80px] md:max-w-[250px]'
                src='https://github.com/LeonardoKleimpaul.png'
                alt='Leonardo Kleimpaul'
                loading='lazy'
              />
              <p className='defaultPageText'>Leonardo Kleimpaul</p>
              <Link
                to='https://linkedin.com/in/leonardo-kleimpaul'
                title="Kleimpaul's LinkedIn"
                target='_blank'
                rel='noopener noreferrer'
                className='navLink'>
                <button className='defaultButton mt-2' type='button'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </Link>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center space-y-6 px-3 mt-[20%] lg:mt-[5%]'>
            <img
              className='max-w-[120px] rounded-2xl'
              src='https://github.com/Cyggnus.png'
              alt='Cyggnus Organization Logo'
              loading='lazy'
            />
            <p className='defaultPageText'>
              Cyggnus was founded by Leonardo Kotlarenko and Leonardo Kleimpaul;
            </p>
            <p className='defaultPageText'>
              Our aim is to create fun and useful open source applications.
            </p>
            <Link
              to='https://github.com/Cyggnus'
              title='Cyggnus Organization'
              target='_blank'
              rel='noopener noreferrer'
              className='navLink'>
              <button className='defaultButton mt-2' type='button'>
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
