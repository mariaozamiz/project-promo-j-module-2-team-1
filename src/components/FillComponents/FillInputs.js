import React from "react";

const FillInputs = (props) => {
  const takeInputValues = (ev) => {
    props.handleInputsValue({
      value: ev.target.value,
      attr: ev.target.name,
    });
  };

  return (
    <>
      <label>{props.label}</label>
      <input
        className={props.className}
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.name}
        onKeyUp={takeInputValues}
      />
    </>
  );
};
export default FillInputs;
