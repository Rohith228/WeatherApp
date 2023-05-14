import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import { BiInfoSquare } from "react-icons/bi";
import MyContext from "../utils/context";

const Search = () => {
  const a = useContext(MyContext);
  const [search, setSearch] = useState("");
  const [successText, setSuccessText] = useState(false);
  const update = a.setData;

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const getSearchedLocation = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=253c7809ff805774e77937e5267a5311&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404" || data.cod === "400" || search === "") {
      alert("Enter Valid City");
    } else {
      let newData = [data];
      // console.log(newData);
      update(...newData);
      setSearch(data);
      console.log(data);
      setSuccessText(true);
    }
  };

  const handleClick = () => {
    getSearchedLocation();
  };

  return (
    <div className="search-container">
      <h1 className="search-heading">
        Search Any Location And Get Your Weather Forecast
      </h1>

      <input
        className="search-input"
        onChange={handleSearchInput}
        type="search"
        placeholder="Enter Location"
      />
      {successText && (
        <p className="success-para">
          Location Forecast Added Successfully Go to details page by clicking
          below
        </p>
      )}
      <button className="button" type="click" onClick={handleClick}>
        Search
      </button>
      {successText && (
        <Link className="details-nav-link" to="/details">
          Go to Details
          <span className="info-icon">
            <BiInfoSquare />
          </span>
        </Link>
      )}
    </div>
  );
};

export default Search;
