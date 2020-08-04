import React from "react";
import "../../stylesheets/layout/shareContent/twitterContent.scss";

function TwitterContent(props) {
  return (
    <div className="twitter">
      <p className="twitter-paragraph">
        ¡Mira mi tarjeta de visita de AdaVillana!
      </p>
      <p className="twitter-url result-url">
        <a href="">Aquí pintamos el enlace a la tarjeta en la web</a>
      </p>
      <div className="twitter-button">
        <a href="https://twitter.com/intent/tweet">
          <i className={props.iconTwitter}></i>Compartir en twitter
        </a>
      </div>
    </div>
  );
}

export default TwitterContent;
