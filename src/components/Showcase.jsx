import React from "react";
import middelaldercenteret from "../assets/middelaldercentret1.jpg";
import marienlyst from "../assets/MarielystStrand.webp";
import nykRevy from "../assets/nyk-revy2023.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Showcase.css";

function Showcase() {
  const images = [
    {
      image: middelaldercenteret,
      title: "Medieval Center",
    },
    {
      image: marienlyst,
      title: "Marielyst",
    },
    {
      image:
        "https://www.fof.dk/-/media/images/egne/syd-og-vestsjaelland/ture-og-rejser/nykoebing-falster-revyen-2023.jpg",
      title: "Revykøbing",
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
          <p>Explore the medieval times with your family.</p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="image__slider"
          style={{ backgroundImage: `url(${images[1].image})` }}
        >
          <span>{images[1].title}</span>
          <p>
            Enjoy the beach, play mini golf with your family and get ice cream.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="each-slide-effect each-slide-effect-3">
        <div
          className="image__slider"
          style={{ backgroundImage: `url(${images[2].image})` }}
        >
          <span>{images[2].title}</span>
          <p>Go watch a theater piece with family/friends - or alone.</p>
          <button>Explore Now</button>
        </div>
      </div>
    </Slide>
  );
}

export default Showcase;
