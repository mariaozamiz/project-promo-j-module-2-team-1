import React from "react";
import "../../stylesheets/layout/cardPreview/listIcons.scss";

function ListIcons(props) {
  return (
    <li className={`contact__icon ${props.name} ${props.hidden}`}>
      <a
        href={props.link}
        className={`js-icon-${props.iconClass}`}
        target="_blank"
      >
        <i className={props.icon} aria-hidden="true"></i>
      </a>
    </li>
  );
}

export default ListIcons;
