import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageModal from '../LanguageModal';

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <button className='defaultButton' type='button' onClick={toggleModal}>
        {t('misc.selectLanguage')}
      </button>
      {showModal && <LanguageModal onClose={toggleModal} />}
    </div>
  );
};

export default LanguageSelector;
