import React from "react";
import FillInputs from "./FillInputs";
import FillInputButton from "./FillInputButton";

function Fill(props) {
  console.log(props);
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
          inputValue={props.handleInputsValue}
        />

        <FillInputs
          name="job"
          label="Puesto"
          className="js-input-job"
          placeholder="Ej: Font-end unicorn"
          id="job"
          type="text"
          handleInputsValue={props.handleInputsValue}
        />

        <FillInputButton
          label="Imagen de perfil"
          className="action button__container"
          avatar={props.avatar}
          isAvatarDefault={props.isAvatarDefault}
          updateAvatar={props.updateAvatar}
        />

        <FillInputs
          label="Email"
          className="js-input-email"
          placeholder="Ej: sally-hill@gmail.com"
          id="email"
          type="email"
          name="email"
          inputValue={props.handleInputsValue}
        />

        <FillInputs
          label="Teléfono"
          className="js-input-telephone"
          placeholder="Ej: 555-55-55-55"
          id="telephone"
          type="number"
          name="telephone"
          inputValue={props.handleInputsValue}
        />

        <FillInputs
          label="Linkedin"
          className="js-input-linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
          id="linkedin"
          type="text"
          name="linkedin"
          inputValue={props.handleInputsValue}
        />

        <FillInputs
          label="Github"
          className="js-input-github"
          placeholder="Ej: sally-hill"
          id="github"
          type="text"
          name="github"
          inputValue={props.handleInputsValue}
        />
      </div>
    </>
  );
}

export default Fill;
