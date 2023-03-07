import React from "react";
import logo from "../assets/logo.png.webp";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <nav>
      <div className="header__left">
        <div className="header__img--wrapper">
          <img src={logo} className="header__img" alt="Header Logo" />
        </div>
        <ul className="header__links">
          <li className="header__link">
            <a href="#" className="header__link--anchor">
              Home
            </a>
          </li>
          <li className="header__link">
            <a href="#" className="header__link--anchor">
              About
            </a>
          </li>
          <li className="header__link">
            <a href="#" className="header__link--anchor">
              Destination
            </a>
          </li>
          <li className="header__link">
            <a href="#" className="header__link--anchor">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__phone">
          <FontAwesomeIcon icon="fa-solid fa-phone" />
          <div className="header__phone--number">+45 23 81 93 39</div>
        </div>
        <ul className="header__socials">
          <li className="header__social">
            <a href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </li>
          <li className="header__social">
            <a href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
