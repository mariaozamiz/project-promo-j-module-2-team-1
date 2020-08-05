import React, { useState } from "react";
import Header from "./HeaderFooter/Header";
import headerLogo from "../images/tarjetas-molonas.png";
import Collapsible from "./Collapsible";
import Preview from "./cardPreview/Preview";
import Palettes from "./colorPalettes/Palettes.js";
import Fill from "./FillComponents/Fill";
import ShareContent from "./shareComponents/ShareContent";
import Footer from "./HeaderFooter/Footer";
import defaultImage from "./defaultImage";

let userData = {
  name: "Mari Carmen",
  job: "Cool Frontend Developer",
  email: "lamari@gmail.com",
  phone: "666-66-66-66",
  linkedin: "lamari",
  github: "lamari",
  photo: "",
  palette: 1,
};

function Design() {
  const [data, setData] = useState(userData);
  const [isAvatarDefault, setIsAvatarDefault] = useState(true);
  const [profile, setProfile] = useState({ avatar: defaultImage });
  // const []=

  const handleInputs = (data) => {};

  const handleInputsValue = (info) => {
    //const value = ev.target.value;//
    //const attr = ev.target.name;//AQUI
    // data[attr] = value;
    setData({
      /* name: data.name,
      job: data.job,
      email: data.email,
      linkedin: data.linkedin,
      github: data.github,
      phone: data.phone, */
      ...data,
      [info.attr]: info.value,
    });
  };
  const updateAvatar = (img) => {
    const newProfile = { ...profile, avatar: img };
    setProfile(newProfile);
    setIsAvatarDefault(false);
  };

  console.log(data.palette);
  return (
    <div>
      <Header />
      <main className="design__container">
        <section className="preview">
          <Preview data={data} />
        </section>
        <section className="customizer">
          <div className="customizer__wrapper">
            <form className="form">
              <fieldset className="form__design collapsable--open">
                <Collapsible name="Diseña" icon="far fa-object-ungroup" />
                <Palettes
                  changeHandler={handleInputsValue}
                  selectedPalette={data.palette}
                />
              </fieldset>
              <fieldset className="form__fill collapsable--open">
                <Collapsible name="Rellena" icon="far fa-keyboard" />
                <Fill
                  handleInputsValue={handleInputsValue}
                  avatar={profile.avatar}
                  isAvatarDefault={isAvatarDefault}
                  updateAvatar={updateAvatar}
                />
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
