import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
