import React, { useRef, useState, Component } from "react";
import "../styles/PopularHotels.css";
import { Hotels } from "../data/Hotels.js";
import Hotel from "./ui/Hotel";
import ReactDOM from "react-dom";
import Carousel from "./ui/Carousel.jsx";

function PopularHotels() {
  const rightText = ">";
  const leftText = "<";

  return (
    <>
      <div className="hotels--container">
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
