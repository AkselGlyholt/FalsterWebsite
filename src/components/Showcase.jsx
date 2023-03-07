import React from "react";
import middelaldercenteret from "../assets/middelaldercentret.png";
import marienlyst from "../assets/1-marie.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Showcase.css"

function Showcase() {
  const images = [
    {
      image: middelaldercenteret,
      title: "Middelaldercentret"
    },
    {
      image: marienlyst,
      title: "Marienlyst"
    },
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div
          className="image__slider"
          style={{ backgroundImage: `url(${images[0].image})` }}
        >
          <span>{images[0].title}</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="image__slider"
          style={{ backgroundImage: `url(${images[1].image})` }}
        >
          <span>{images[1].title}</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Explore Now</button>
        </div>
      </div>
    </Slide>
  );
}

export default Showcase;
