import React from "react";
import "../stylesheets/core/mixins.scss";
import "../stylesheets/core/variables.scss";

function InputButton(props) {
  return (
    <>
      <input
        className={props.className}
        id={props.id}
        type={props.type}
        name={props.name}
      />
    </>
  );
}

export default InputButton;
