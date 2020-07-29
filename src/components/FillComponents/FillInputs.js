import React from 'react';

function FillInputs(props) {
  const inputValue = (ev) => {
    props.inputValue(ev);
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
        onKeyUp={inputValue}
      />
    </>
  );
}
export default FillInputs;
