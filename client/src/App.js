import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
