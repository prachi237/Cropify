import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import "../styles/WeatherCard.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("kolkata");
  const [tempInfo, setTempInfo] = useState({});
  console.log(searchTerm);

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=88b24050d2ca29d04ba5d7633e72d208`;

      let res = await fetch(url);
      let data = await res.json();
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunrise, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
        sunrise,
      };

      setTempInfo(myNewWeatherInfo);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <h1 className="WeatherHeading">Weather Details</h1>
      <div className="wrap">
        <h2>Enter your place here</h2>
        <div className="search">
          <input
            type="search"
            placeholder="Search City..."
            id="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button onClick={getWeatherInfo} className="searchButton">
            Search
          </button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Search;
