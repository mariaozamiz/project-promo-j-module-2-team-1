import React from 'react';
import headerLogo from '../images/tarjetas-molonas.png';
import Collapsible from './Collapsible';
import Preview from './cardPreview/Preview';
import Palletes from './color-palletes/Palletes.js';

let userData = {
    name: 'Mari Carmen',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
    palette: '',
};

function Design() {
    return (
        <div>
            <header className="header_design">
                <div className="wrapper">
                    <a href="./index.html">
                        <img
                            className="header__photo"
                            src={headerLogo}
                            alt="Hola"
                        />
                    </a>
                </div>
            </header>
            <main className="design__container">
                <section className="preview">
                   <Preview />
                </section>
                <section className="customizer">
                    <div className="customizer__wrapper">
                        <form className="form">
                            <fieldset className="form__design collapsable--open">
                                <Collapsible
                                    name="Diseña"
                                    icon="far fa-object-ungroup"
                                />
                                <Palletes />
                            </fieldset>
                            <fieldset className="form__fill collapsable--open">
                                <Collapsible
                                    name="Rellena"
                                    icon="far fa-keyboard"
                                />
                                <div className="collapsible__content">
                                    <label htmlFor="name">
                                        Nombre completo
                                    </label>
                                    <input
                                        className="js-input-name"
                                        placeholder="Ej: Sally Jill"
                                        id="name"
                                        type="text"
                                        name="name"
                                    />

                                    <label htmlFor="job">Puesto</label>
                                    <input
                                        className="js-input-job"
                                        placeholder="Ej: Font-end unicorn"
                                        id="job"
                                        type="text"
                                        name="job"
                                    />

                                    <label htmlFor="profile-image">
                                        Imagen de perfil
                                    </label>
                                    <div className="action button__container">
                                        <button
                                            className="action__upload-btn js__profile-trigger"
                                            type="button"
                                        >
                                            Añadir imagen
                                        </button>
                                        <input
                                            type="file"
                                            name=""
                                            id="img-selector"
                                            className="action__hiddenField js__profile-upload-btn"
                                        />
                                        <div className="profile__preview js__profile-preview image__box"></div>
                                    </div>

                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="js-input-email"
                                        placeholder="Ej: sally-hill@gmail.com"
                                        id="email"
                                        type="email"
                                        name="email"
                                    />

                                    <label htmlFor="telephone">Teléfono</label>
                                    <input
                                        className="js-input-telephone"
                                        placeholder="Ej: 555-55-55-55"
                                        id="telephone"
                                        type="number"
                                        name="telephone"
                                    />

                                    <label htmlFor="linkedin">Linkedin</label>
                                    <input
                                        className="js-input-linkedin"
                                        placeholder="Ej: linkedin.com/in/sally.hill"
                                        id="linkedin"
                                        type="text"
                                        name="linkedin"
                                    />

                                    <label htmlFor="github">Github</label>
                                    <input
                                        className="js-input-github"
                                        placeholder="Ej: sally-hill"
                                        id="github"
                                        type="text"
                                        name="github"
                                    />
                                </div>
                            </fieldset>

                            <fieldset className="form__share collapsable--open">
                                <Collapsible
                                    name="Comparte"
                                    icon="fas fa-share-alt"
                                />
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
                                        ¡Mira mi tarjeta de visita de
                                        AdaVillana!
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
                    <span className="copyright">
                        Awesome profile-cards @2018
                    </span>
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
