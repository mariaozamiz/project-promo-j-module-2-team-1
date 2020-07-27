import React, { useState } from 'react';
import headerLogo from '../images/tarjetas-molonas.png';
import Collapsible from './Collapsible';
import Preview from './cardPreview/Preview';
import Palletes from './color-palletes/Palletes.js';
import Fill from './FillComponents/Fill';
import ShareContent from './shareComponents/ShareContent';

let userData = {
  name: 'Mari Carmen',
  job: 'Cool Frontend Developer',
  email: 'lamari@gmail.com',
  phone: '666-66-66-66',
  linkedin: 'lamari',
  github: 'lamari',
  photo: '',
  palette: '1',
};

function Design() {
  const [data, setData] = useState(userData);

  const handleImputsValue = (ev) => {
    setData({
      name: ev.target.value,
    });
  };


  return (
    <div>
      <header className='header_design'>
        <div className='wrapper'>
          <a href='./index.html'>
            <img className='header__photo' src={headerLogo} alt='Hola' />
          </a>
        </div>
      </header>
      <main className='design__container'>
        <section className='preview'>
          <Preview data={data} />
        </section>
        <section className='customizer'>
          <div className='customizer__wrapper'>
            <form className='form'>
              <fieldset className='form__design collapsable--open'>
                <Collapsible name='Diseña' icon='far fa-object-ungroup' />
                <Palletes />
              </fieldset>
              <fieldset className='form__fill collapsable--open'>
                <Collapsible name='Rellena' icon='far fa-keyboard' />
                <Fill imputValue={handleImputsValue} />
              </fieldset>

              <fieldset className='form__share collapsable--open'>
                <Collapsible name='Comparte' icon='fas fa-share-alt' />
                <ShareContent />
              </fieldset>
            </form>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='wrapper'>
          <span className='copyright'>Awesome profile-cards @2018</span>
          <img
            className='logo-adalab'
            src='././assets/images/logo-adalab.png'
            rel='logo-adalab'
          />
        </div>
      </footer>
    </div>
  );
}

export default Design;
