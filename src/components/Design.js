import React, { useState } from "react";
import Header from "./HeaderFooter/Header";
import Collapsible from "./Collapsible";
import Preview from "./cardPreview/Preview";
import Palletes from "./colorPalletes/Palletes.js";
import Fill from "./FillComponents/Fill";
import ShareContent from "./shareComponents/ShareContent";
import Footer from "./HeaderFooter/Footer";

// sass
import "../stylesheets/pages/design.scss";
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';

let userData = {};

function Design() {
  const [data, setData] = useState(userData);

  const handleInputsValue = (inputInfo) => {
    console.log(inputInfo);
    setData({
      /* name: data.name,
      job: data.job,
      email: data.email,
      linkedin: data.linkedin,
      github: data.github,
      phone: data.phone, */
      ...data,
      [inputInfo.attr]: inputInfo.value,
    });
  };

  const resetUserData = () => {
    setData({ ...userData });
  };

  /*const handlePalleteValue = (ev) => {
    console.log('paleta', ev);
  };*/
  console.log(userData, data, userData === data);

  return (
    <div>
      <Landing />
      <Header />
      <main className="design__container">
        <section className="preview">
          <Preview data={data} reset={resetUserData} />
        </section>
        <section className="customizer">
          <div className="customizer__wrapper">
            <form className="form">
              <fieldset className="form__design collapsable--open">
                <Collapsible name="Diseña" icon="far fa-object-ungroup" />
                <Palletes inputValue={handleInputsValue} />
              </fieldset>
              <fieldset className="form__fill collapsable--open">
                <Collapsible name="Rellena" icon="far fa-keyboard" />
                <Fill inputValue={handleInputsValue} data={data} />
              </fieldset>

              <fieldset className="form__share collapsable--open">
                <Collapsible name="Comparte" icon="fas fa-share-alt" />
                <ShareContent />
              </fieldset>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Design;
