import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h2>Farmik</h2>
      </div>
      <div className="navItems">
        <h2>
          <a href="/">Home</a>
        </h2>
        <h2>
          <a href="/about">About</a>
        </h2>
        <h2>
          <a href="/analyze">Analyze</a>
        </h2>
        <h2>
          <a href="/shop">Shop</a>
        </h2>
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
