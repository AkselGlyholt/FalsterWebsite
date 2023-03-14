import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import "./styles/Global.css";
import React from "react";
import PopularHotels from "./components/PopularHotels";
import TrendingDestinations from "./components/TrendingDestinations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <PopularHotels />
      <TrendingDestinations />
      <Footer />
    </div>
  );
}

export default App;
