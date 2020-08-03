import React from "react";
import "../../stylesheets/layout/footer/footer.scss";
import footerLogo from "../../images/logo-adalab.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <span className="copyright">Awesome profile-cards @2020</span>
        <a href="https://adalab.es/" target="_blank">
          <img className="logo-adalab" src={footerLogo} alt="logo-adalab" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
