import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Book({ hotel }) {
  console.log(hotel);

  return (
    <div className="hotel">
      <div style={{
        backgroundImage: `url(${hotel.image})`
      }} className="hotel__img--wrapper">
      </div>
      <div className="hotel__info--container">
        <div className="hotel__info-top--container">
          <h2 className="hotel__title">{hotel.title}</h2>
          <div className="hotel__rating">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <h2 className="hotel__rating--number">{hotel.rating}</h2>
          </div>
        </div>
        <div className="hotel__info-other--container">
          <div className="hotel__info">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <h2 className="hotel__info--title">{hotel.location}</h2>
          </div>
          <div className="hotel__info">
            <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
            <h2 className="hotel__info--title">DKK {hotel.price}/Day</h2>
          </div>
        </div>
        <p className="hotel__para">{hotel.para}</p>
      </div>
      <a href={hotel.link} target="_blank" rel="noopener noreferrer">
        <button className="hotel--button">Book Now</button>
      </a>
    </div>
  );
}

export default Book;
