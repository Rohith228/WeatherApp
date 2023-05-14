import React, { useEffect, useState } from "react";
import * as Loader from "react-loader-spinner";
import RenderForecast from "./renderForecast";
import "./home.css";

const Home = () => {
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=Hyderabad&APPID=253c7809ff805774e77937e5267a5311&units=metric";

  const getWeatherDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => {
      setWeatherDetails(data);

      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getWeatherDetails();
  }, []);

  console.log(weatherDetails);

  return (
    <div className="bg-container">
      {isLoading ? (
        <Loader.TailSpin />
      ) : (
        <RenderForecast details={weatherDetails} />
      )}
    </div>
  );
};

export default Home;
