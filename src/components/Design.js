import React from "react";
import headerLogo from "../images/tarjetas-molonas.png";
import Fill from "./Fill";
import Collapsible from "./Collapsible";

let userData = {
  name: "Mari Carmen",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
  palette: "",
};

function Design() {
  return (
    <div>
      <header className="header_design">
        <div className="wrapper">
          <a href="./index.html">
            <img className="header__photo" src={headerLogo} alt="Hola" />
          </a>
        </div>
      </header>
      <main className="design__container">
        <section className="preview">
          <div className="preview__wrapper">
            <button id="button-reset" className="button-reset js-button-reset">
              <i className="far fa-trash-alt" aria-hidden="true"></i> reset
            </button>
            <div className="card">
              <div className="card__id">
                <h3 className="card__id_name js-card-name">Nombre Apellido</h3>
                <p className="card__id_role js-card-job">Puesto de trabajo</p>
              </div>
              <div className="profile card__photo js-card-photo">
                <div className="profile__image js__profile-image"></div>
              </div>
              <div className="card__contacts">
                <ul className="js-contact__list">
                  <li className="contact__icon js-telephone hidden">
                    <i
                      className="fas fa-mobile-alt js-icon-telephone"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li className="contact__icon js-email hidden">
                    <a className="js-icon-email" target="_blank">
                      <i className="far fa-envelope" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="contact__icon js-linkedin hidden">
                    <a href="" className="js-icon-linkedin" target="_blank">
                      <i
                        className="fab fa-linkedin-in js-icon-linkedin"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="contact__icon js-github hidden">
                    <a href="" className="js-icon-github" target="_blank">
                      <i
                        className="fab fa-github-alt js-icon-github"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="customizer">
          <div className="customizer__wrapper">
            <form className="form">
              <fieldset className="form__design collapsable--open">
                <Collapsible name="Diseña" icon="far fa-object-ungroup" />
                <div className="collapsible__content">
                  <legend>Colores</legend>
                  <label className="palette-1" htmlFor="palette-1">
                    <input
                      id="palette-1"
                      type="radio"
                      value="1"
                      name="color-palettes"
                      className="js-palette"
                    />
                    <div className="color-cold-1"></div>
                    <div className="color-cold-2"></div>
                    <div className="color-cold-3"></div>
                  </label>
                  <label className="palette-2" htmlFor="palette-2">
                    <input
                      id="palette-2"
                      type="radio"
                      value="2"
                      name="color-palettes"
                      className="js-palette"
                    />
                    <div className="color-warm-1"></div>
                    <div className="color-warm-2"></div>
                    <div className="color-warm-3"></div>
                  </label>
                  <label className="palette-3" htmlFor="palette-3">
                    <input
                      id="palette-3"
                      type="radio"
                      value="3"
                      name="color-palettes"
                      className="js-palette"
                    />
                    <div className="color-neutral-1"></div>
                    <div className="color-neutral-2"></div>
                    <div className="color-neutral-3"></div>
                  </label>
                </div>
              </fieldset>
              <fieldset className="form__fill">
                <Collapsible name="Rellena" icon="far fa-keyboard" />
                <Fill />
              </fieldset>

              <fieldset className="form__share">
                <Collapsible name="Comparte" icon="fas fa-share-alt" />
                <div className="collapsible__content">
                  <button
                    type="submit"
                    className="button__share js-button__share"
                  >
                    <i className="far fa-address-card"></i>
                    Crear tarjeta
                  </button>
                </div>
                <div className="js-twitter twitter hidden">
                  <p className="js-twiter-paragraph twitter-paragraph">
                    ¡Mira mi tarjeta de visita de AdaVillana!
                  </p>
                  <p className="twitter-url result-url">
                    <a
                      className="twitter-share-button"
                      href="https://twitter.com/intent/tweet"
                    ></a>
                  </p>
                  <div className="js-twitter-button twitter-button">
                    <a className="twitter-link">
                      <i className="fab fa-twitter"></i>
                      Compartir en twitter
                    </a>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrapper">
          <span className="copyright">Awesome profile-cards @2018</span>
          <img
            className="logo-adalab"
            src="././assets/images/logo-adalab.png"
            rel="logo-adalab"
          />
        </div>
      </footer>
    </div>
  );
}

export default Design;
