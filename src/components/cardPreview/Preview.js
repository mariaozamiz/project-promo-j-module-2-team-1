import React from "react";
import ButtonReset from "./ButtonReset";
import Card from "./Card";
import "../../stylesheets/layout/cardPreview/preview.scss";

function Preview(props) {
  return (
    <section className="preview">
      <div className="preview__wrapper">
        <ButtonReset reset={props.reset} />
        <Card data={props.data} openOutside={props.openOutside} />
      </div>
    </section>
  );
}

export default Preview;
