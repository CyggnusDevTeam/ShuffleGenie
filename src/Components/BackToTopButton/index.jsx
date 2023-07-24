import React from 'react';
import { showBackToTopButton, backToTopAction } from '../../Utils/useBackToTop';
import arrowUp from '../../Img/arrow.svg';

function BackToTopButton() {
  return (
    <button
      className={`fixed bottom-28 right-16 translate-y-full transition-transform duration-200 ${
        showBackToTopButton() ? 'visible' : 'invisible'
      }`}
      id='backToTopButton'
      type='button'
      onClick={backToTopAction}>
      <img src={arrowUp} alt='arrowUp' />
    </button>
  );
}

export default BackToTopButton;
