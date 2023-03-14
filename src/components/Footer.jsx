import React from "react";
import logo from "../assets/logo.png.webp";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <figure className="footer__logo--wrapper">
        <img src={logo} alt="Logo" className="footer__logo" />
      </figure>
      <ul className="footer__links">
        <a href="#" className="footer__link">Home</a>
        <a href="#hotels" className="footer__link">Hotels</a>
        <a href="#destinations" className="footer__link">Destinations</a>
      </ul>
      <h1 className="footer__copyright">Copyright &#169; 2023 Travelo</h1>
    </footer>
  );
}

export default Footer;
