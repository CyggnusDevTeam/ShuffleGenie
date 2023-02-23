import React from 'react';
import './Spinner.css';

// Spinner from https://loading.io/css/ S2
function Spinner() {
  return (
    <div className="content-center lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Spinner;
