import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageButtonIProps } from '../../Interfaces/LanguageButtonIProps';

const LanguageButton: React.FC<LanguageButtonIProps> = ({ label, onClick }) => {
  const { t } = useTranslation();

  return (
    <button
      className='block sm:text-sm! mb:text-base w-full text-left mb-1 lg:mb-2 navLink'
      type='button'
      onClick={onClick}>
      {t(`misc.langList.${label}`)}
    </button>
  );
};

export default LanguageButton;
