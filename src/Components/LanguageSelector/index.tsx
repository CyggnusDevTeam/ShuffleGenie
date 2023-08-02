import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageModal from '../LanguageModal';

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className='defaultButton' type='button' onClick={openModal}>
        {t('misc.selectLanguage')}
      </button>
      {showModal && <LanguageModal onClose={closeModal} />}
    </div>
  );
};

export default LanguageSelector;
