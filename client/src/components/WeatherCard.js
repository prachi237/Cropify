import React from "react";
import "../styles/WeatherCard.css";

const WeatherCard = ({ tempInfo }) => {
  const today = Date.now();
  let sec = tempInfo.sunset;
  let date = new Date(sec * 1000);
  let sunset = `${date.getHours()}:${
    date.getMinutes().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;

  sec = tempInfo.sunrise;
  date = new Date(sec);

  let sunrise = `${date.getHours()}:${
    date.getMinutes().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;

  date = new Date(today);
  let Today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div className="WeatherContainer">
      <div className="left">
        <h2>
          {tempInfo.name}, <span>{Today}</span>
        </h2>
        Sunrise: {sunrise}
        <h6>Temp:</h6>
        <h2>{Math.floor(tempInfo.temp - 273.15)}°c</h2>
        <h6>Humidity:</h6>
        <h2>{tempInfo.humidity}%</h2>
        <h6>Pressure:</h6>
        <h2>{tempInfo.pressure} atm</h2>
        <h6>Weather:</h6>
        <h2>{tempInfo.weatherType}</h2>
        Sunset: {sunset}
      </div>
      <div className="rightSection">
        <img
          src="https://img.freepik.com/free-photo/smart-agriculture-iot-with-hand-planting-tree-background_53876-124626.jpg?size=626&ext=jpg"
          alt="farming"
        />
        <h2>Mostly Sunny</h2>
        <h5>The temperature is suitable for kharif crops.</h5>
      </div>
    </div>
  );
};

export default WeatherCard;
