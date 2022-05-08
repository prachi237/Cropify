import React from "react";
import ShopCard from "./ShopCard";
import "../styles/ShopCard.css";

const Shop = () => {
  return (
    <div className="shopContainer">
      <h1 className="shopHeading">Shop</h1>
      <div className="shopSection">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default Shop;
