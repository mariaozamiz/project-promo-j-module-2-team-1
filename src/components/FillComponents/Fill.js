import React from 'react';
import FillInputs from './FillInputs';
import FillInputButton from './FillInputButton';

function Fill(props) {
  return (
    <>
      <div className='collapsible__content'>
        <FillInputs
          name='name'
          label='Nombre completo'
          className='js-input-name'
          placeholder='Ej: Sally Jill'
          id='name'
          type='text'
          inputValue={props.inputValue}
        />

        <FillInputs
          name='job'
          label='Puesto'
          className='js-input-job'
          placeholder='Ej: Font-end unicorn'
          id='job'
          type='text'
          inputValue={props.inputValue}
        />

        <FillInputButton
          label='Imagen de perfil'
          className='action button__container'
        />

        <FillInputs
          label='Email'
          className='js-input-email'
          placeholder='Ej: sally-hill@gmail.com'
          id='email'
          type='email'
          name='email'
          inputValue={props.inputValue}
        />

        <FillInputs
          label='Teléfono'
          className='js-input-telephone'
          placeholder='Ej: 555-55-55-55'
          id='telephone'
          type='number'
          name='telephone'
          inputValue={props.inputValue}
        />

        <FillInputs
          label='Linkedin'
          className='js-input-linkedin'
          placeholder='Ej: linkedin.com/in/sally.hill'
          id='linkedin'
          type='text'
          name='linkedin'
          inputValue={props.inputValue}
        />

        <FillInputs
          label='Github'
          className='js-input-github'
          placeholder='Ej: sally-hill'
          id='github'
          type='text'
          name='github'
          inputValue={props.inputValue}
        />
      </div>
    </>
  );
}

export default Fill;
