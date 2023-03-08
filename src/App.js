import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import "./styles/Global.css";
import React from "react";
import PopularHotels from "./components/PopularHotels";

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
