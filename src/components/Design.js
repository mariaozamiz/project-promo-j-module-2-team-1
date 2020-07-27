import React, { useState }from "react";
import headerLogo from "../images/tarjetas-molonas.png";
import Collapsible from "./Collapsible";
import Preview from "./cardPreview/Preview";
import Palletes from "./color-palletes/Palletes.js";
import Fill from "./FillComponents/Fill";

let userData = {
  name: "Mari Carmen",
  job: "Cool Frontend Developer",
  email: "lamari@gmail.com",
  phone: "666-66-66-66",
  linkedin: "lamari",
  github: "lamari",
  photo: "",
  palette: "1",
};

function Design() {

  const [data, setData] = useState(userData)

  

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
          <Preview data={data}/>
        </section>
        <section className="customizer">
          <div className="customizer__wrapper">
            <form className="form">
              <fieldset className="form__design collapsable--open">
                <Collapsible name="Diseña" icon="far fa-object-ungroup" />
                <Palletes />
              </fieldset>
              <fieldset className="form__fill collapsable--open">
                <Collapsible name="Rellena" icon="far fa-keyboard" />
                <Fill />
              </fieldset>

              <fieldset className="form__share collapsable--open">
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
          >>>>>>> develop
        </div>
      </footer>
    </div>
  );
}

export default Design;
