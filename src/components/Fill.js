import React from "react";
import FillContent from "./FillContent";

const Fill = props => {
    return (
        <div>
        <fieldset className="form__fill">
                <div className="form__title js-collapsible__trigger">
                  <h2 className="h2">
                    <i className="far fa-keyboard"></i>
                    Rellena
                  </h2>
                  <i className="fas fa-chevron-down"></i>
                </div>
                
                <div className= "fillContent">
                <FillContent />
                </div>
              
              </fieldset>
              </div>
    )
  };
  
  export default Fill;