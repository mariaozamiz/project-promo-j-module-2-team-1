import React from "react";

function FillInputs(props) {
  const inputValue = (ev) => {
    const value = ev.target.value;
    const attr = ev.target.name;
    props.inputValue({
      attr: attr,
      value: value,
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
        onChange={inputValue}
      />
    </>
  );
}
export default FillInputs;
