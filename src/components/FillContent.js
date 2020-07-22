import React from "react";

const FillContent = props => {
    return (
        <div>
         <div className="collapsible__content">
         <ul className="fillImputs">
         <FillImputs />
      </ul>
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    className="js-input-name"
                    placeholder="Ej: Sally Jill"
                    id="name"
                    type="text"
                    name="name"
                  />

                  <label htmlFor="job">Puesto</label>
                  <input
                    className="js-input-job"
                    placeholder="Ej: Font-end unicorn"
                    id="job"
                    type="text"
                    name="job"
                  />

                  <label htmlFor="profile-image">Imagen de perfil</label>
                  <div className="action button__container">
                    <button
                      className="action__upload-btn js__profile-trigger"
                      type="button"
                    >
                      Añadir imagen
                    </button>
                    <input
                      type="file"
                      name=""
                      id="img-selector"
                      className="action__hiddenField js__profile-upload-btn"
                    />
                    <div className="profile__preview js__profile-preview image__box"></div>
                  </div>

                  <label htmlFor="email">Email</label>
                  <input
                    className="js-input-email"
                    placeholder="Ej: sally-hill@gmail.com"
                    id="email"
                    type="email"
                    name="email"
                  />

                  <label htmlFor="telephone">Teléfono</label>
                  <input
                    className="js-input-telephone"
                    placeholder="Ej: 555-55-55-55"
                    id="telephone"
                    type="number"
                    name="telephone"
                  />

                  <label htmlFor="linkedin">Linkedin</label>
                  <input
                    className="js-input-linkedin"
                    placeholder="Ej: linkedin.com/in/sally.hill"
                    id="linkedin"
                    type="text"
                    name="linkedin"
                  />

                  <label htmlFor="github">Github</label>
                  <input
                    className="js-input-github"
                    placeholder="Ej: sally-hill"
                    id="github"
                    type="text"
                    name="github"
                  />
                </div>
        </div>
    )
  };

export default FillContent;