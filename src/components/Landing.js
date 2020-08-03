import React from 'react';

const Landing = (props) => {
  return (
    <div>
      <header class='header'>
        <div class='wrapper'>
          <img
            class='header__photo'
            src='./assets/images/tarjetas-molonas.png'
          />
        </div>
      </header>

      <main class='main'>
        <div class='wrapper'>
          <h1>Crea tu tarjeta de visita</h1>
          <p>Crea mejores contactos profesionales de forma fácil y cómoda</p>
          <section class='options'>
            <article>
              <i class='far fa-object-ungroup'></i>
              <p>Diseña</p>
            </article>
            <article>
              <i class='far fa-keyboard'></i>
              <p>Rellena</p>
            </article>
            <article>
              <i class='fas fa-share-alt'></i>
              <p>Comparte</p>
            </article>
          </section>
          <div class='button__start'>
            <a href='./design.html' class='button__start--text'>
              comenzar
            </a>
          </div>
        </div>
      </main>
      <footer class='footer'>
        <div class='wrapper'>
          <span class='copyright'>Awesome profile-cards @2018</span>
          <img
            class='logo-adalab'
            src='././assets/images/logo-adalab.png'
            rel='logo-adalab'
          />
        </div>
      </footer>
    </div>
  );
};

export default Landing;
