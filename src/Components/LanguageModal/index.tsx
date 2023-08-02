// LanguageModal.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageModalIProps } from '../../Interfaces/LanguageModalIProps';

const LanguageModal: React.FC<LanguageModalIProps> = ({
  onClose,
  onChangeLanguage,
}) => {
  const { t } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    onChangeLanguage(language);
    onClose();
  };

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg'>
        <h2 className='text-lg font-semibold mb-4'>{t('selectLanguage')}</h2>
        <button
          className='block w-full text-left mb-2'
          type='button'
          onClick={() => handleChangeLanguage('en')}>
          English
        </button>
        <button
          className='block w-full text-left'
          type='button'
          onClick={() => handleChangeLanguage('pt_BR')}>
          Português Brasileiro
        </button>
        <button className='mt-4' type='button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
