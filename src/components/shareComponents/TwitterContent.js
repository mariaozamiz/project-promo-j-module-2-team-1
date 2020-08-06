import React from "react";
import "../../stylesheets/layout/shareContent/twitterContent.scss";

function TwitterContent(props) {
  return (
    <div className="twitter">
      <p className="twitter-paragraph">
        ¡Mira mi tarjeta de visita de AdaVillana!
      </p>
      <p className="twitter-url result-url">
        <a href={props.cardURL} target={props.openOutside}>
          {props.cardURL}
        </a>
      </p>
      <div className="twitter-button">
        <a href={props.twitterLink} target={props.openOutside}>
          <i className={props.iconTwitter}></i>Compartir en twitter
        </a>
      </div>
    </div>
  );
}

export default TwitterContent;
