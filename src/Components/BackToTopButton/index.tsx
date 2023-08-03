import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { showBackToTopButton, backToTopAction } from '../../Utils/useBackToTop';

const BackToTopButton: React.FC = () => (
  <button
    className={`backToTopAnimation px-4 defaultButton fixed bottom-20 lg:bottom-28 md:right-16 right-5 translate-y-full transition-transform duration-200 ${
      showBackToTopButton() ? 'visible' : 'invisible'
    }`}
    id='backToTopButton'
    type='button'
    onClick={backToTopAction}>
    <ArrowUpIcon className='h-6 w-6 text-white' />
  </button>
);

export default BackToTopButton;
