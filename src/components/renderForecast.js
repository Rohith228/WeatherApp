import React from "react";
import { Link } from "react-router-dom";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import "./renderForecast.css";

const RenderForecast = (props) => {
  const { details } = props;

  const { coord, main, name, sys, wind } = details;
  const { lat, lon } = coord;
  const { country } = sys;
  const { speed } = wind;
  const { temp, feels_like, temp_max, temp_min, pressure } = main;

  return (
    <div>
      <h1 className="home-heading">Weather Forecast for your location</h1>
      <p className="location-details">
        <span className="highlight">Location:</span> {name} ({country}
        <span className="highlight"> longitude:</span> {lon}
        <span className="highlight"> latitude:</span> {lat})
      </p>
      <ul className="list-container">
        <li className="list-item">
          <span className="highlight">Temperature:</span> {temp} °C
          <span className="icons">
            <FaTemperatureHigh />
          </span>
        </li>
        <li className="list-item">
          <span className="highlight">FeelsLike: </span> {feels_like} °C
        </li>
        <li className="list-item">
          <span className="highlight">Min Temperature:</span> {temp_min} °C
        </li>
        <li className="list-item">
          <span className="highlight">Max Temperature:</span> {temp_max} °C
        </li>
        <li className="list-item">
          <span className="highlight">Pressure:</span> {pressure} pascals
          <span className="icons">
            <FaCompressArrowsAlt />
          </span>
        </li>
        <li className="list-item">
          <span className="highlight">WindSpeed:</span> {speed} km/hr
          <span className="icons">
            <MdSpeed />
          </span>
        </li>
      </ul>
      <Link className="nav-link" to="/search">
        Want to check weather forecast of any location? Click Here
      </Link>
    </div>
  );
};

export default RenderForecast;
