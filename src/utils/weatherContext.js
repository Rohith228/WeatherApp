import { useState } from "react";
import MyContext from "./context";

const WeatherData = (props) => {
  const state = [{}];

  const [data, setData] = useState(state);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default WeatherData;
