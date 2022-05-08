import React from "react";
import FeatureCard from "./FeatureCard";
import "../styles/Feature.css";

const Features = () => {
  return (
    <div className="FeatureContainer">
      <h1>Features</h1>
      <div className="FeatureCardSection">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;
