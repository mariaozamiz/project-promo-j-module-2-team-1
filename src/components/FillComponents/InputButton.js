import React from "react";
import PropTypes from "prop-types";

function InputButton(props) {
  const { avatar } = props;
  return (
    <>
      <input
        className={props.className}
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.avatar} //antes lo teníamos como props.data.avatar
        inputValue={props.inputValue}
        style={{ backgroundImage: `url(${avatar})` }}
      />
    </>
  );
}

InputButton.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default InputButton;
