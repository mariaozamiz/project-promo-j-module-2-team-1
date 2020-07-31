import React from "react";
import PropTypes from "prop-types";
import ProfileButton from "./ProfileButton";
import InputButton from "./InputButton";

function FillInputButton(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const { isAvatarDefault, avatar } = props;

  const handleFilePicker = () => {
    myFileField.current.click();
  };

  const uploadImage = (e) => {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener("load", getImage);
    fr.readAsDataURL(myFile);
    //reset={resetUserData} Intuicion
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const getPreview = (isDefault, image) => {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  };
  console.log(props);
  return (
    <>
      <label>{props.label}</label>
      <div className={props.className}>
        <ProfileButton
          className="action__upload-btn js__profile-trigger"
          type="button"
          button="Añadir imagen"
        />
        <InputButton
          type="file"
          name=""
          ref={myFileField}
          onChange={uploadImage}
          id="img-selector"
          className="action__hiddenField js__profile-upload-btn"
          style=""
          value=""
          inputValue=""
        />
        <div
          className="profile__preview js__profile-preview image__box"
          style={getPreview(isAvatarDefault, avatar)}
        ></div>
      </div>
    </>
  );
}
FillInputButton.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default FillInputButton;
