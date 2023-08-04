import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { XMarkIcon } from "@heroicons/react/24/solid";
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
      <div className='flex flex-col items-start fixed top-0 overflow-y-auto h-screen sm:static sm:h-auto lg:h-[80%] xl:h-[850px] bg-gray-900 p-2 sm:p-6 sm:rounded-lg text-white font-bold sm:max-w-md w-full'>
        <div className='flex flex-row justify-between w-full mt-2 sm:mt-0 md:mb-2 lg:mb-4'>
        <h2 className='text-lg text-violet-1 align-top ml-2 font-semibold text-center'>
          {t('misc.selectLanguage')}
        </h2>
        <button
          className='text-center navLink mr-2 p-0'
          type='button'
          onClick={onClose}>
        <XMarkIcon className="h-7 w-7 text-violet-1 stroke-violet-1" />
        </button>
        </div>
        <hr className='my-3 lg:my-4 w-full' />
        <div className='space-y-1 lg:space-y-2 w-full writing-horizontal'>
          {supportedLangList.map((language) => (
            <LanguageButton
              key={language}
              label={language}
              onClick={() => handleChangeLanguage(language)}
            />
          ))}
        </div>
        <button
          className='mt-1 lg:mt-4 text-violet-1 text-center navLink'
          type='button'
          onClick={onClose}>
          {t('misc.close')}
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
