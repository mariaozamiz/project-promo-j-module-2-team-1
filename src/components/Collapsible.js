import React from "react";
import "../stylesheets/collapsible/collapsible.scss";

function Collapsible(props) {
  const handleClickCollapsibleChild = (ev) => {
    console.log("hola soy este div", ev.currentTarget, ev.currentTarget.id);
    props.handleClickCollapsible({
      collapseClassName: ev.currentTarget,
      collapseId: ev.currentTarget.id,
    });
  };

  return (
    <div
      className="form__title js-collapsible__trigger"
      onClick={handleClickCollapsibleChild}
      id={props.name}
    >
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
