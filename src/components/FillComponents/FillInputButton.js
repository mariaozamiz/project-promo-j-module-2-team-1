import React from 'react';
import ProfileButton from './ProfileButton';
import InputButton from './InputButton';

class FillInputButton extends React.Component {
    constructor(props) {
        super(props);
        this.myFileField = React.createRef();
        this.handleFilePicker = this.handleFilePicker.bind(this);
    }

    handleFilePicker() {
        debugger;
        this.myFileField.current.click();
    }

    render() {
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
                    />
                    <div className="profile__preview js__profile-preview image__box"></div>
                </div>
            </>
        );
    }
}

export default FillInputButton;
