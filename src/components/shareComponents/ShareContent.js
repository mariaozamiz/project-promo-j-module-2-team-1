import React from "react";

function ShareContent(props) {
  const renderButton = () => {
    return (
      <button type="submit" className="button__share js-button__share">
        <i className="far fa-address-card"></i>
        Crear tarjeta
      </button>
    );
  };

  const renderSentence = () => {
    return (
      <p className="js-twiter-paragraph twitter-paragraph">
        ¡Mira mi tarjeta de visita de AdaVillana!
      </p>
    );
  };

  const renderUrl = () => {
    return (
      <p className="twitter-url result-url">
        {/* <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet"
        ></a> ---- esto debería crearse por javascript con enlace a la card, sin twitter*/}
      </p>
    );
  };

  const renderTwitterButton = () => {
    return (
      <div className="js-twitter-button twitter-button">
        <a className="twitter-link" href="">
          {" "}
          {/*agregar aquí href con enlace a twitter y la url*/}
          <i className="fab fa-twitter"></i>Compartir en twitter
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="collapsible__content">{renderButton()}</div>
      <div className="js-twitter twitter">
        {renderSentence()}
        {renderUrl()}
        {renderTwitterButton()}
      </div>
    </>
  );
}

export default ShareContent;
