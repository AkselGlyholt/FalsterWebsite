import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Book({ hotel }) {
  console.log(hotel)


  return (
    <div className="hotel">
      <figure className="hotel__img--wrapper">
        <img
          className="hotel__img"
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
        <div className="hotel__info-other--container">
          <div className="hotel__info">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <h2 className="hotel__info--title">Falster, Denmark</h2>
          </div>
          <div className="hotel__info">
            <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
            <h2 className="hotel__info--title">DKK 120/Day</h2>
          </div>
        </div>
        <p className="hotel__para">
          Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do
          eiusmod tempor nova incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <button className="hotel--button">Book Now</button>
    </div>
  );
}

export default Book;
