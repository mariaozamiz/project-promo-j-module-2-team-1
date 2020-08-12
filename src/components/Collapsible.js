import React from "react";
import "../stylesheets/collapsible/collapsible.scss";

function Collapsible(props) {
  const handleClickCollapsibleChild = (ev) => {
    props.handleClickCollapsible(ev.currentTarget.id);
  };

  return (
    <div
      className="form__title"
      onClick={handleClickCollapsibleChild}
      id={props.id}
    >
      <h2 className="h2">
        <i className={props.icon}></i>
        {props.name}
      </h2>
      <div>
        <i
          className={`fas fa-chevron-down ${
            props.isOpen === props.id ? "" : "transform"
          }`}
        ></i>
      </div>
    </div>
  );
}

export default Collapsible;
