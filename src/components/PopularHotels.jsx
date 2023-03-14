import React from "react";
import "../styles/PopularHotels.css";
import Carousel from "./ui/Carousel.jsx";

function PopularHotels() {
  return (
    <>
      <div id="hotels" className="hotels--container">
        <div className="hotels__top--bar">
          <h1 className="hotels__title">Popular Hotels</h1>
          <div className="hotels__button--container">
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
}

export default PopularHotels;
