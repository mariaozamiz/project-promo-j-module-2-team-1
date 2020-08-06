import React from "react";
import "../../stylesheets/layout/cardPreview/listIcons.scss";

function ListIcons(props) {
  return (
    <li className={`contact__icon${props.data.pallete || 1} ${props.name}`}>
      <a href={props.link} target={props.openOutside}>
        <i className={props.icon} aria-hidden="true"></i>
      </a>
    </li>
  );
}

export default ListIcons;
