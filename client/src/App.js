import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <HeroSection />
        <Search />
      </div>
    </div>
  );
};

export default App;
