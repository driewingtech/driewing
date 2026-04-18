import React from "react";
import logoBrand from "../assets/gw_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-logo">
          <img
            src={logoBrand}
            alt="Driewing Logo"
            className="footer-logo-img"
          />
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Advanced Digital Excellence. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
