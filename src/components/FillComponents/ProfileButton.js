import React, { Component } from "react";
import PropTypes from "prop-types";

function ProfileButton(props) {
  return (
    <>
      <button className={props.className} type={props.type}>
        {props.button}
      </button>
    </>
  );
}

export default ProfileButton;

// class ProfileButton extends Component {
//   render() {
//     const {avatar} = this.props;
//     return (
//       <div className="profile">
//         <div className="profile__avatar" style={{backgroundImage: `url(${avatar})`}}></div>
//       </div>
//     );
//   }
// }

// Profile.propTypes = {
//   avatar: PropTypes.string.isRequired
// };

// export default Profile;
