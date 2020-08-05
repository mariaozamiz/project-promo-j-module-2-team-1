import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../stylesheets/layout/fill/fill_imput_button.scss";

class FillInputButton extends Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }
  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }
  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { isAvatarDefault, avatar } = this.props;
    const { props } = this;

    return (
      <>
        <label>{props.label}</label>
        <div className={props.className}>
          <button
            className="action__upload-btn js__profile-trigger"
            type="button"
            onClick={this.handleFilePicker}
          >
            Añadir imagen
          </button>
          <input
            ref={this.myFileField}
            className="action__hiddenField js__profile-upload-btn"
            type="file"
            onChange={this.uploadImage}
          />
          <div
            className="profile__preview js__profile-preview image__box"
            style={this.getPreview(isAvatarDefault, avatar)}
          ></div>
        </div>
      </>
    );
  }
}

FillInputButton.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default FillInputButton;
