import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import "./styles/Global.css";
import React from "react";
import PopularHotels from "./components/PopularHotels";
import Carousel from "./components/ui/Carousel.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <PopularHotels />
      
    </div>
  );
}

export default App;
