import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../utils/context";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";
import "./details.css";

const Details = () => {
  const a = useContext(MyContext);
  const array = a.data;
  const { coord, main, name, sys, wind } = array;
  const { lat, lon } = coord;
  const { country } = sys;
  const { speed } = wind;
  const { temp, feels_like, temp_max, temp_min, pressure } = main;

  console.log(array);

  return (
    <div className="search-results-container">
      <h1>Here is Your Weather Forecast Details</h1>
      <p className="location-details">
        <span className="highlight">Location:</span> {name} ({country}
        <span className="highlight"> longitude:</span> {lon}{" "}
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
      <Link className="search-nav" to="/search">
        Want To Search Another Location? Click Here!
        <span className="icons">
          <AiOutlineSearch />
        </span>
      </Link>
      <Link className="nav-home-link" to="/">
        Or Go Home ^
      </Link>
    </div>
  );
};

export default Details;
