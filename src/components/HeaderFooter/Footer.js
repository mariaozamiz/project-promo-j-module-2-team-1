import React from 'react';
import footerLogo from '../../images/logo-adalab.png';

function Footer() {
  return (
    <footer className='footer_design'>
      <div className='wrapper'>
        <a href='./index.html'>
          <span className='copyright'>Awesome profile-cards @2020</span>
          <img className='logo__photo' src={footerLogo} alt='logo-adalab' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
