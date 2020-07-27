import React from 'react';


function ButtonReset() { /* BORRAR TODOS LOS DATOS DE SETSTATE AL HACER CLICK */
  return ( 
      <button id='button-reset' className='button-reset js-button-reset'>
        <i className='far fa-trash-alt' aria-hidden='true'></i> reset
      </button>
  );
}

export default ButtonReset;
