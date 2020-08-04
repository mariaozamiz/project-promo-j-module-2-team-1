import React from "react";
import "../stylesheets/collapsible/collapsible.scss";

function Collapsible(props) {
  return (
    <div className="form__title js-collapsible__trigger">
      <h2 className="h2">
        <i className={props.icon}></i>
        {props.name}
      </h2>
      <div>
        <i className={props.iconCollapse}></i>
      </div>
    </div>
  );
}

export default Collapsible;
