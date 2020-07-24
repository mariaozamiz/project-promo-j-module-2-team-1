import React from "react";

function Collapsible(props) {
  return (
    <div className="form__title js-collapsible__trigger">
      <h2 className="h2">
        <i className={props.icon}></i>
        {props.name}
      </h2>
      <div>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default Collapsible;
