import React from 'react';
import { showBackToTopButton, backToTopAction } from '../../Utils/useBackToTop';
import arrowUp from '../../Img/arrow.svg';

function BackToTopButton() {
  return (
    <button
      className={`fixed bottom-28 md:right-16 right-5 translate-y-full transition-transform duration-200 ${
        showBackToTopButton() ? 'visible' : 'invisible'
      }`}
      id='backToTopButton'
      type='button'
      onClick={backToTopAction}>
      <img
        className='lg:max-w-[50px] max-w-[35px]'
        src={arrowUp}
        alt='arrowUp'
      />
    </button>
  );
}

export default BackToTopButton;
