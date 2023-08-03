import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import supportedLangList from '../../data/supportedLangList';
import LanguageButton from '../LanguageButton';
import { LanguageModalIProps } from '../../Interfaces/LanguageModalIProps';

const LanguageModal: React.FC<LanguageModalIProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    localStorage.setItem('userDefLang', language);
    i18n.changeLanguage(language);
    onClose();
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className='dimmedBg fixed top-0 pt-6 lg:pt-0 left-0 h-screen flex items-center justify-center z-50'>
      <div className='bg-gray-900 p-2 lg:p-6 rounded-lg text-white font-bold max-w-md w-full'>
        <h2 className='text-lg font-semibold text-center sm:mb-0 mb:mb-2 lg:mb-4'>
          {t('misc.selectLanguage')}
        </h2>
        <hr className='mb-1 lg:mb-6' />
        <div className='space-y-0 lg:space-y-2 writing-horizontal'>
          {supportedLangList.map((language) => (
            <LanguageButton
              key={language}
              label={language}
              onClick={() => handleChangeLanguage(language)}
            />
          ))}
        </div>
        <button
          className='mt-1 lg:mt-4 text-violet-2 text-center navLink'
          type='button'
          onClick={onClose}>
          {t('misc.close')}
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
