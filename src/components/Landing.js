import React from 'react';
import "../stylesheets/layout/landing/main.scss";
import headerLogo from "../images/tarjetas-molonas.png";
import { Link } from 'react-router-dom';

const Landing = (props) => {
  return (
    <div>
      <header className='header'>
        <div className='wrapper'>
          <img
            className='header__photo'
            src={headerLogo}
          />
        </div>
      </header>

      <main className='main'>
        <div className='wrapper'>
          <h1>Crea tu tarjeta de visita</h1>
          <p>Crea mejores contactos profesionales de forma fácil y cómoda</p>
          <section className='options'>
            <article>
              <i className='far fa-object-ungroup'></i>
              <p>Diseña</p>
            </article>
            <article>
              <i className='far fa-keyboard'></i>
              <p>Rellena</p>
            </article>
            <article>
              <i className='fas fa-share-alt'></i>
              <p>Comparte</p>
            </article>
          </section>
          <div className='button__start'>
            <Link to='/design' className='button__start--text'>
              comenzar
            </Link>
          </div>
        </div>
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
};

export default Landing;
