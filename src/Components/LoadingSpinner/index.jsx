import React from 'react';
import { Spinner } from '@material-tailwind/react';

function LoadingSpinner() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Spinner color='purple' className='h-12 w-12' />
    </div>
  );
}

export default LoadingSpinner;
