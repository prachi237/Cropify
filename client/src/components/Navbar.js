import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h2>Farmik</h2>
      </div>
      <div className="navItems">
        <h2> Home</h2>
        <h2> About</h2>
        <h2> Analyze</h2>
        <h2> Shop</h2>
      </div>
      <div className="loginSection">
        <div>
          <button className="Language">Translate</button>
          <button className="login">Login</button>
        </div>
        <div>
          Don’t have an account? <a href="/signup">Signup here</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
