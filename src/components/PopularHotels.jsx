import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/PopularHotels.css";

function PopularHotels() {
  const rightText = ">";
  const leftText = "<";

  return (
    <div className="hotels--container">
      <div className="hotels__top--bar">
        <h1 className="hotels__title">Popular Hotels</h1>
        <div className="hotels__button--container">
          <button className="hotels__button">{leftText}</button>
          <button className="hotels__button">{rightText}</button>
        </div>
      </div>
      <div className="hotels__wrapper">
        <div className="hotel">
          <figure className="hotel__img--wrapper">
            <img className="hotel__img"
              src="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80"
              alt=""
            />
          </figure>
          <div className="hotel__info--container">
            <div className="hotel__info-top--container">
              <h2 className="hotel__title">Hote Baja</h2>
              <div className="hotel__rating">
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <h2 className="hotel__rating--number">5.0</h2>
              </div>
            </div>
            <div className="hotel__info--container">
              <div className="hotel__info">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <h2 className="hotel__info--title">Falster, Denmark</h2>
              </div>
              <div className="hotel__info">
                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                <h2 className="hotel__info--title">DKK 120/Day</h2>
              </div>
            </div>
            <p className="hotel__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint mollitia est quisquam nesciunt adipisci voluptates nostrum saepe dignissimos debitis libero vitae vero maiores, possimus, ullam quaerat dicta explicabo consectetur!</p>
            <button className="hotel--button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularHotels;
