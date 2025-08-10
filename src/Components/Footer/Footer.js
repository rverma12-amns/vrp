import React from "react";
import Logo from "../../Assets/logo.png";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="AM/NS India Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>QUALITY</span>
          <span>HELP</span>
          <span>SHARE</span>
          <span>CAREERS</span>
          <span>VENDOR REGISTRATION</span>
          <span>WORK</span>
        </div>

        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>HELLO@AMNS.COM</span>
          <span>PRESS@AMNS.COM</span>
          <span>CONTACT@AMNS.COM</span>
        </div>

        <div className="footer-section-columns">
          <span>TERMS & CONDITIONS</span>
          <span>PRIVACY POLICY</span>
          <span>COPYRIGHT © 2025 | DEVELOPED BY AM/NS INDIA PRIVATE LIMITED IT TEAM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

