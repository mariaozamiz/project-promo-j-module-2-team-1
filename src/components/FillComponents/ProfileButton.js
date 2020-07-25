import React from "react";
import "../stylesheets/core/mixins.scss";
import "../stylesheets/core/variables.scss";

function ProfileButton(props) {
  return (
    <>
      <button className={props.className} type={props.type}>
        {props.button}
      </button>
    </>
  );
}

export default ProfileButton;
