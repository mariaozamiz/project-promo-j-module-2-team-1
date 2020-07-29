import React from 'react';
import ProfileButton from './ProfileButton';
import InputButton from './InputButton';

function FillInputButton(props) {
  return (
    <>
      <label>{props.label}</label>
      <div className={props.className}>
        <ProfileButton
          className='action__upload-btn js__profile-trigger'
          type='button'
          button='Añadir imagen'
        />
        <InputButton
          type='file'
          name=''
          id='img-selector'
          className='action__hiddenField js__profile-upload-btn'
        />
        <div className='profile__preview js__profile-preview image__box'></div>
      </div>
    </>
  );
}

export default FillInputButton;
