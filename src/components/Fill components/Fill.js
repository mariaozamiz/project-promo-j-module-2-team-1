import React from "react";
import FillImputs from "./FillImputs";

function Fill(props) {
  return (
    <>
      <div className="collapsible__content">
        <FillImputs
          label="Nombre completo"
          className="js-input-name"
          placeholder="Ej: Sally Jill"
          id="name"
          type="text"
          name="name"
        />

        <FillImputs
          label="Puesto"
          className="js-input-job"
          placeholder="Ej: Font-end unicorn"
          id="job"
          type="text"
          name="job"
        />

        <label htmlFor="profile-image">Imagen de perfil</label>
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

        <FillImputs
          label="Email"
          className="js-input-email"
          placeholder="Ej: sally-hill@gmail.com"
          id="email"
          type="email"
          name="email"
        />

        <FillImputs
          label="Teléfono"
          className="js-input-telephone"
          placeholder="Ej: 555-55-55-55"
          id="telephone"
          type="number"
          name="telephone"
        />

        <FillImputs
          label="Linkedin"
          className="js-input-linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
          id="linkedin"
          type="text"
          name="linkedin"
        />

        <FillImputs
          label="Github"
          className="js-input-github"
          placeholder="Ej: sally-hill"
          id="github"
          type="text"
          name="github"
        />
      </div>
    </>
  );
}

export default Fill;
