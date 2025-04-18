// src/components/WeatherCard.jsx

import React from "react";
import { getWeatherImage } from "../utils/getWeatherImage";
import weatherImages from "../assets/weather"; // dynamic import explained below

const WeatherCard = ({ weather }) => {
    console.log(weather)
  const imageName = getWeatherImage(weather);
  const imageSrc = weatherImages[imageName];

  return (
    <div className="text-center">
      <img src={imageSrc} alt={weather} className="w-20 h-20 md:w-32 md:h-32 mx-auto" />
      <h2 className="text-lg md:text-xl md:font-medium font-semibold  mb-2">{weather.charAt(0).toUpperCase()+weather.slice(1).toLowerCase()}</h2>
    </div>
  );
};

export default WeatherCard;
