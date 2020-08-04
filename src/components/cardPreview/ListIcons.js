import React from "react";
import "../../stylesheets/layout/cardPreview/listIcons.scss";

function ListIcons(props) {
  console.log(props.collorPallete);
  return (
    <li className={`contact__icon${1} ${props.name}`}>
      <a
        href={props.link}
        target="_blank"
      >
        <i className={props.icon} aria-hidden="true"></i>
      </a>
    </li>
  );
}

export default ListIcons;
