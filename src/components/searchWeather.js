import React, { useState } from "react";

const Weather = () => {
  let [responseObj, setResponseObj] = useState({});
  function searchWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=eedea857757c1fc226a3ec6cc3b917b1",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>{JSON.stringify(responseObj)}</div>
      <button onClick={searchWeather}>Get Forecast</button>
    </div>
  );
};

export default Weather;
