import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
    <div className='dimmedBg flex items-center justify-center'>
      <div className='bg-gray-900 p-6 rounded-lg text-white font-bold'>
        <h2 className='text-lg font-semibold mb-4'>
          {t('misc.selectLanguage')}
        </h2>
        <hr className='mb-6' />
        <button
          className='block w-full text-left mb-2 navLink'
          type='button'
          onClick={() => handleChangeLanguage('en')}>
          {t('misc.langList.en')}
        </button>
        <button
          className='block w-full text-left navLink'
          type='button'
          onClick={() => handleChangeLanguage('pt-BR')}>
          {t('misc.langList.pt_BR')}
        </button>
        <button
          className='mt-4 text-violet-2 navLink'
          type='button'
          onClick={onClose}>
          {t('misc.close')}
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
