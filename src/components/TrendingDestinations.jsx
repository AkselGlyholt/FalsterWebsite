import React from "react";
import { SlGraph } from "react-icons/sl";
import { GoLocation } from "react-icons/go";
import "../styles/Trending.css";

function TrendingDestinations() {
  const data = [
    {
      destination: "Beachfront",
      para: "A Trip to the Bahamas and the Carribean Ocean",
      days: 7,
      location: "Falster",
      price: 99,
      id: 1,
    },
  ];

  return (
    <div className="destinations--wrapper">
      <div className="distination__left">
        <h1 className="destinations__title">Trending Destination</h1>
        <p className="destinations__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim veniam.
        </p>
      </div>
      <div className="distination__right">
        <div className="destination">
          <div
            className="destination__image"
            style={{
              backgroundImage: `url(
                https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c7/80/e2/sobek-europas-storste.jpg?w=1200&h=-1&s=1
              )`,
            }}
          ></div>
          <div className="destination__info">
            <div className="destination__info-top">
              <h2 className="destination__title">Crocodile Zoo</h2>
              <h2 className="destination__price">149kr</h2>
            </div>
            <p className="destination__about">
              The biggest collection of different crocodiles, in europe.
            </p>
            <div className="destination__tags">
              <div className="destination__tag">
                <SlGraph className="icon" />
                <h2 className="tag__title">TRENDING</h2>
              </div>
              <div className="destination__tag">
                <GoLocation className="icon" />
                <h2 className="tag__title">FALSTER</h2>
              </div>
            </div>
            <button className="destination__btn">Book Now</button>
          </div>
        </div>
        <div className="destination">
          <div
            className="destination__image"
            style={{
              backgroundImage: `url(
                https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c7/80/e2/sobek-europas-storste.jpg?w=1200&h=-1&s=1
              )`,
            }}
          ></div>
          <div className="destination__info">
            <div className="destination__info-top">
              <h2 className="destination__title">Beachfront</h2>
              <h2 className="destination__price">149kr</h2>
            </div>
            <p className="destination__about">
              The biggest collection of different crocodiles, in europe.
            </p>
            <div className="destination__tags">
              <div className="destination__tag">
                <SlGraph className="icon" />
                <h2 className="tag__title">TRENDING</h2>
              </div>
              <div className="destination__tag">
                <GoLocation className="icon" />
                <h2 className="tag__title">FALSTER</h2>
              </div>
            </div>
            <button className="destination__btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingDestinations;
