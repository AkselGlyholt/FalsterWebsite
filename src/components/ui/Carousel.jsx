import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel"
import "../../styles/PopularHotels.css";
import { Hotels } from "../../data/Hotels.js";
import Hotel from "./Hotel.jsx";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1250, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Test() {
  return (
    <Carousel
      className="carousel"
      responsive={responsive}
      infinite={true}
      centerMode={true}
    >
      {Hotels.map((hotel) => (
        <Hotel hotel={hotel} key={hotel.id} />
      ))}
    </Carousel>
  );
}

export default Test;
