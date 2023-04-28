import axios from "axios";
import React, { useEffect, useState } from "react";

function Weather() {
  // const apiKey = process.env.API_KEY;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const getData = (city) => {
    if (!city) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("Response: ", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const handleClick = () => {
    getData(inputCity);
  };

  const handleChange = (e) => {
    setInputCity(e.target.value);
    // e.preventDefault();
  };
  useEffect(() => {
    getData(inputCity);
  }, []);
  return (
    <>
      <h2 className="weather-heading"> Weather Api.</h2>
      <div className="container">
        <input
          value={inputCity}
          onChange={handleChange}
          className="city"
          type="text"
        />
        <button onClick={handleClick} className="search">
          Search
        </button>
      </div>
      <div className="res">
        <h4 className="resCity">{data?.name}</h4>
        <h5 className="temp">{data?.main?.temp} °C</h5>
      </div>
    </>
  );
}

export default Weather;
