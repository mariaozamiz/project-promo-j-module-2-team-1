import React from "react";
import FillImputs from "./FillImputs";
import FillImputButton from "./FillImputButton";

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

        <FillImputButton
          label="Imagen de perfil"
          className="action button__container"
        />

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
