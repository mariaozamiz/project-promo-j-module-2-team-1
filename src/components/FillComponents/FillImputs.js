import React from "react";
import "../stylesheets/core/mixins.scss";
import "../stylesheets/core/variables.scss";

function FillImputs(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        className={props.className}
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.name}
      />
    </>
  );
}
export default FillImputs;
