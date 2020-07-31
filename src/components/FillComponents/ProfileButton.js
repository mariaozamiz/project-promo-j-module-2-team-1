import React from "react";

function ProfileButton(props) {
  return (
    <>
      <button
        className={props.className}
        type={props.type}
        onClick={props.handleFilePicker}
      >
        {props.button}
      </button>
    </>
  );
}

export default ProfileButton;
