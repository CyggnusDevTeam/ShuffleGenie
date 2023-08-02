import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageModal from '../LanguageModal';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className='defaultButton' type='button' onClick={openModal}>
        {t('misc.selectLanguage')}
      </button>
      {showModal && (
        <LanguageModal
          onClose={closeModal}
          onChangeLanguage={handleChangeLanguage}
        />
      )}
    </div>
  );
};

export default LanguageSelector;
