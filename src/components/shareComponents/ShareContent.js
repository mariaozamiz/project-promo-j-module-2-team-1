import React from "react";
import TwitterContent from "./TwitterContent";
import ShareButton from "./ShareButton";
import "../../stylesheets/layout/shareContent/share.scss";

function ShareContent(props) {
  return (
    <div className="collapsible__content">
      <ShareButton />
      <TwitterContent iconTwitter={props.iconTwitter} />
    </div>
  );
}

export default ShareContent;
