import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showModal]);

  return (
    <div>
      <button className='defaultButton' type='button' onClick={openModal}>
        {t('selectLanguage')}
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
