import React from "react";


function FillImputs(props) {

  const imputValue = (ev) => {
    props.imputValue(ev)
  }

  return (
    <>
      <label>{props.label}</label>
      <input
        className={props.className}
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.name}
        onKeyUp={imputValue}
      />
    </>
  );
}
export default FillImputs;
