import React from "react";
import FillInputs from "./FillInputs";
import FillInputButton from "./FillInputButton";
import "../../stylesheets/layout/fill/fill.scss";

function Fill(props) {
  return (
    <>
      <div className="collapsible__content">
        <FillInputs
          name="name"
          label="Nombre completo"
          className="js-input-name"
          placeholder="Ej: Sally Jill"
          id="name"
          type="text"
          value={props.data.name}
          inputValue={props.inputValue}
          data={props.data}
        />

        <FillInputs
          name="job"
          label="Puesto"
          className="js-input-job"
          placeholder="Ej: Font-end unicorn"
          id="job"
          type="text"
          value={props.data.job}
          inputValue={props.inputValue}
          data={props.data}
        />

        <FillInputButton
          label="Imagen de perfil"
          className="action button__container"
          avatar={props.avatar}
          isAvatarDefault={props.isAvatarDefault}
          updateAvatar={props.updateAvatar}
          data={props.data}
        />

        <FillInputs
          label="Email"
          className="js-input-email"
          placeholder="Ej: sally-hill@gmail.com"
          id="email"
          type="email"
          name="email"
          value={props.data.email}
          inputValue={props.inputValue}
          data={props.data}
        />

        <FillInputs
          label="Teléfono"
          className="js-input-telephone"
          placeholder="Ej: 555-55-55-55"
          id="phone"
          type="tel"
          name="phone"
          value={props.data.phone}
          inputValue={props.inputValue}
          data={props.data}
        />

        <FillInputs
          label="Linkedin"
          className="js-input-linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
          id="linkedin"
          type="text"
          name="linkedin"
          value={props.data.linkedin}
          inputValue={props.inputValue}
          data={props.data}
        />

        <FillInputs
          label="Github"
          className="js-input-github"
          placeholder="Ej: sally-hill"
          id="github"
          type="text"
          name="github"
          value={props.data.github}
          inputValue={props.inputValue}
          data={props.data}
        />
      </div>
    </>
  );
}

export default Fill;
