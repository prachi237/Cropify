import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import AddCrop from "./components/AddCrop";
import DiagnoseCrop from "./components/DiagnoseCrop";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <HeroSection />
        <Search />
        <Features />
        <Shop />
        <AddCrop />
        <DiagnoseCrop />
      </div>
      <Footer />
    </div>
  );
};

export default App;
