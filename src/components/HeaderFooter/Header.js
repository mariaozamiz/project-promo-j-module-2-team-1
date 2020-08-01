import React from 'react';
import headerLogo from '../../images/tarjetas-molonas.png';
import '../stylesheets/layout/_header.scss';

function Header() {
  return (
    <header className='header_design'>
      <div className='wrapper'>
        <a href='./index.html'>
          <img className='header__photo' src={headerLogo} alt='Hola' />
        </a>
      </div>
    </header>
  );
}

export default Header;
