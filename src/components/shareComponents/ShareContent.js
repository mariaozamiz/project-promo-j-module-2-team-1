import React from "react";
import TwitterContent from "./TwitterContent";
import ShareButton from "./ShareButton";
import "../../stylesheets/layout/shareContent/share.scss";

function ShareContent(props) {
  return (
    <div className="collapsible__content">
      <ShareButton SendData={props.SendData} />
      <TwitterContent
        iconTwitter={props.iconTwitter}
        cardURL={props.cardURL}
        twitterLink={props.twitterLink}
        openOutside={props.openOutside}
      />
    </div>
  );
}

export default ShareContent;
