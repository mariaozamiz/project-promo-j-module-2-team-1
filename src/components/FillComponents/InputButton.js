import React from "react";


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
