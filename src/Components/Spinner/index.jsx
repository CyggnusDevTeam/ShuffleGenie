import React from 'react';
import './Spinner.css';

// Spinner from https://loading.io/css/ S2
function Spinner() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='lds-ellipsis'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Spinner;
