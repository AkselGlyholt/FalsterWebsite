import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import "./styles/Global.css";
import React from "react";
import PopularHotels from "./components/PopularHotels";
import Carousel from "./components/ui/Carousel.jsx"
import TrendingDestinations from "./components/TrendingDestinations";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <PopularHotels />
      <TrendingDestinations />
    </div>
  );
}

export default App;
