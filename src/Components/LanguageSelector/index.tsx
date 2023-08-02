import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/24/solid';
import LanguageModal from '../LanguageModal';

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className='w-full items-center text-center'>
      <button
        className='items-center navLink'
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
