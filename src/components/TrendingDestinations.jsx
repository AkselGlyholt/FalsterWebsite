import React from "react";
import { SlGraph } from "react-icons/sl";
import { GoLocation } from "react-icons/go";
import "../styles/Trending.css";

function TrendingDestinations() {
  return (
    <div id="destinations" className="destinations--wrapper">
      <div className="distination__left">
        <h1 className="destinations__title">Trending Destination</h1>
        <p className="destinations__para">
          Come visit some of the most popular on Falster. If you're fealing adventures then come experience the exotic crocodiles, or expeirence the collection from Cornelius S.C. Rödders
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
              <h2 className="destination__price">149 kr</h2>
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
            <a
              href="https://krokodillezoo.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="destination__btn"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="destination">
          <div
            className="destination__image"
            style={{
              backgroundImage: `url(
                https://media-cdn.tripadvisor.com/media/photo-s/12/fb/7b/66/skelet.jpg
              )`,
            }}
          ></div>
          <div className="destination__info">
            <div className="destination__info-top">
              <h2 className="destination__title">Museum Obscurum</h2>
              <h2 className="destination__price">249 kr</h2>
            </div>
            <p className="destination__about">
              Collection from Cornelius S.C. Rödders
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
            <a
              href="https://museumlollandfalster.dk/museum-obscurum/"
              target="_blank"
              rel="noopener noreferrer"
              className="destination__btn"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingDestinations;
