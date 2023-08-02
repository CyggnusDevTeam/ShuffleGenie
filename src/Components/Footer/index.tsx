import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className='flex md:flex-row justify-around w-full bg-gray-3 lg:h-48 flex-wrap p-3 space-y-4'>
      <div className='flex flex-col justify-center space-y-3 items-center md:max-w-sm lg:w-1/3'>
        <p className='text-white text-sm font-bold defaultPageText'>
          {t('footer.copyright.allRights')}
        </p>
        <p className='text-sm defaultPageText'>
          {t('footer.copyright.affiliation')}
        </p>
        <p className='text-sm defaultPageText'>
          {t('footer.copyright.providedBy')}
          <a
            href='https://marvelsnapzone.com/'
            target='_blank'
            rel='noopener noreferrer'>
            {t('footer.copyright.dataFrom')}
          </a>
          .
        </p>
      </div>
      <div className='flex items-center'>
        <a
          className='text-white md:text-sm text-base font-bold inline-flex items-center'
          href='https://github.com/Cyggnus'
          target='_blank'
          rel='noopener noreferrer'>
          Cyggnus
          <img
            className='w-10 h-10 rounded-lg ml-2 md:block'
            src='https://github.com/Cyggnus.png'
            alt='Cyggnus Organization Logo'
            loading='lazy'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
