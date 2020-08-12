import React, { useState, useEffect } from "react";
import Header from "./HeaderFooter/Header";
import Collapsible from "./Collapsible";
import Preview from "./cardPreview/Preview";
import Palletes from "./colorPalletes/Palletes.js";
import Fill from "./FillComponents/Fill";
import ShareContent from "./shareComponents/ShareContent";
import Footer from "./HeaderFooter/Footer";
import defaultImage from "./defaultImage";

// sass
import "../stylesheets/pages/design.scss";
// import { checkPropTypes } from "prop-types";

let userData = {
  photo: defaultImage,
};
const openOutside = "_blank";

function Design() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("myValueLocalStorage")) || userData
  );
  // const [loading, setLoading] = useState(false);
  const [isAvatarDefault, setIsAvatarDefault] = useState(true);
  const [cardURL, setCardURL] = useState("");
  const [twitterLink, settwitterLink] = useState(
    "https://twitter.com/intent/tweet"
  );

  const [isOpen, setIsOpen] = useState("collapsible-1");
  const [activeShare, setActiveShare] = useState("hidden");

  useEffect(() => {
    // setLoading(true);
    localStorage.setItem("myValueLocalStorage", JSON.stringify(data));
    // setLoading(false);
  });

  const handleInputsValue = (inputInfo) => {
    setData({
      ...data,
      [inputInfo.attr]: inputInfo.value,
    });
  };

  const updateAvatar = (img) => {
    setData({ ...data, photo: img });
    setIsAvatarDefault(false);
  };

  const resetUserData = () => {
    setData({
      name: "",
      job: "",
      photo: defaultImage,
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
    setCardURL("");
    setActiveShare("hidden");
  };

  const handleClickCollapsible = (targetId) => {
    if (targetId !== isOpen) {
      setIsOpen(targetId);
    } else {
      setIsOpen("");
    }
  };

  const showURL = (result) => {
    if (result.success === true) {
      setCardURL(result.cardURL);
      settwitterLink(
        `https://twitter.com/intent/tweet?text=Tu%20tarjeta%20es:%20${result.cardURL}`
      );
      setActiveShare("");
    } else {
      setCardURL("¡Vaya! Ha habido un error");
    }
  };

  const SendData = (ev) => {
    ev.preventDefault();
    return fetch(
      "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        showURL(result);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div>
      <Header />
      <main className="design__container">
        <Preview data={data} reset={resetUserData} openOutside={openOutside} />
        <section>
          <form className="form">
            <fieldset className="form__design ">
              <Collapsible
                icon="far fa-object-ungroup"
                name="Diseña"
                id="collapsible-1"
                handleClickCollapsible={handleClickCollapsible}
                isOpen={isOpen}
              />
              <Palletes
                inputValue={handleInputsValue}
                selectedPallete={data.pallete}
                id="collapsible-1"
                isOpen={isOpen}
              />
            </fieldset>

            <fieldset className="form__fill ">
              <Collapsible
                icon="far fa-keyboard"
                name="Rellena"
                id="collapsible-2"
                handleClickCollapsible={handleClickCollapsible}
                isOpen={isOpen}
              />
              <Fill
                inputValue={handleInputsValue}
                data={data}
                avatar={data.photo}
                isAvatarDefault={isAvatarDefault}
                updateAvatar={updateAvatar}
                id="collapsible-2"
                isOpen={isOpen}
              />

              {/* <p>
                {loading === true ? "Cargando..." : "Mostrando tus datos..."}
              </p> */}
            </fieldset>

            <fieldset>
              <Collapsible
                handleClickCollapsible={handleClickCollapsible}
                name="Comparte"
                icon="fas fa-share-alt"
                id="collapsible-3"
                isOpen={isOpen}
              />
              <ShareContent
                isOpen={isOpen}
                id="collapsible-3"
                iconTwitter="fab fa-twitter"
                SendData={SendData}
                cardURL={cardURL}
                twitterLink={twitterLink}
                openOutside={openOutside}
                activeShare={activeShare}
              />
            </fieldset>
          </form>
        </section>
      </main>
      <Footer openOutside={openOutside} />
    </div>
  );
}

export default Design;
