import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageModal from '../LanguageModal';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('userLang', language);
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
