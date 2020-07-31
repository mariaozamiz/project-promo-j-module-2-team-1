import React from 'react';

function ButtonReset(props) {
  const resetData = (ev) => {
    props.reset(ev);
  };

  return (
    <button
      id='button-reset'
      className='button-reset js-button-reset'
      onClick={resetData}
    >
      <i className='far fa-trash-alt' aria-hidden='true'></i> reset
    </button>
  );
}

export default ButtonReset;
