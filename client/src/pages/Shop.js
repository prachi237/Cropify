import React from "react";
import ShopCard from "../components/ShopCard";

const Shop = () => {
  return (
    <div>
      <div style={{ padding: "40px 0" }}>
        <h1 className="shopHeading">Fertilizers</h1>
        <div className="shopSection">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
      <div style={{ padding: "40px 0" }}>
        <h1 className="shopHeading">Pesticides</h1>
        <div className="shopSection">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
      <div style={{ padding: "40px 0" }}>
        <h1 className="shopHeading">Seed</h1>
        <div className="shopSection">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </div>
  );
};

export default Shop;
