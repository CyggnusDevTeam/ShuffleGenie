import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/24/solid';
import { LanguageSelectorIProps } from '../../Interfaces/LanguageSelectorIProps';
import LanguageModal from '../LanguageModal';

const LanguageSelector: React.FC<LanguageSelectorIProps> = ({
  handleNavMenu,
}) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal && handleNavMenu) handleNavMenu();
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <button
        className='navLink flex items-center w-full justify-center'
        title={t('nav.btnTitle.locale')}
        type='button'
        onClick={toggleModal}>
        <LanguageIcon className='h-5 w-5 align-text-bottom' />
      </button>
      {showModal && <LanguageModal onClose={toggleModal} />}
    </div>
  );
};

export default LanguageSelector;
