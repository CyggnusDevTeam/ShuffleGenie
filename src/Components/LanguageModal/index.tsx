import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageModalIProps } from '../../Interfaces/LanguageModalIProps';

const LanguageModal: React.FC<LanguageModalIProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    onClose();
  };

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg'>
        <h2 className='text-lg font-semibold mb-4'>
          {t('misc.selectLanguage')}
        </h2>
        <button
          className='block w-full text-left mb-2'
          type='button'
          onClick={() => handleChangeLanguage('en')}>
          {t('misc.langList.en')}
        </button>
        <button
          className='block w-full text-left'
          type='button'
          onClick={() => handleChangeLanguage('pt_BR')}>
          {t('misc.langList.pt_BR')}
        </button>
        <button className='mt-4' type='button' onClick={onClose}>
          {t('misc.close')}
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
