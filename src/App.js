import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";
import WeatherData from "./utils/weatherContext";
import Details from "./components/details";

const App = () => {
  return (
    <>
      <WeatherData>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </WeatherData>
    </>
  );
};

export default App;
