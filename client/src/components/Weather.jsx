// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Weather() {
//   const apiKey = import.meta.env.VITE_API_KEY;
//   const [inputCity, setInputCity] = useState("");
//   const [data, setData] = useState({});
//   const getData = (city) => {
//     if (!city) return;
//     const apiURL =
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//       city +
//       "&units=metric&appid=" +
//       apiKey;
//     axios
//       .get(apiURL)
//       .then((res) => {
//         console.log("Response: ", res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log("Error: ", err);
//       });
//   };

//   const handleClick = () => {
//     getData(inputCity);
//   };

//   const handleChange = (e) => {
//     setInputCity(e.target.value);
//     // e.preventDefault();
//   };
//   useEffect(() => {
//     getData(inputCity);
//   }, []);
//   return (
//     <>
//       <h2 className="weather-heading"> Weather Api.</h2>
//       <div className="container">
//         <input
//           value={inputCity}
//           onChange={handleChange}
//           className="city"
//           type="text"
//         />
//         <button onClick={handleClick} className="search">
//           Search
//         </button>
//       </div>
//       <div className="res">
//         <h4 className="resCity">{data?.name}</h4>
//         <h5 className="temp">{data?.main?.temp} °C</h5>
//       </div>
//     </>
//   );
// }

// export default Weather;
import axios from "axios";
import React, { useEffect, useState } from "react";

function Weather() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState({});

  const getData = (city) => {
    if (!city) return;
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    axios
      .all([axios.get(currentWeatherUrl), axios.get(forecastUrl)])
      .then((res) => {
        const currentWeatherData = res[0].data;
        const forecastData = res[1].data;
        console.log("Current Weather Data: ", currentWeatherData);
        console.log("Forecast Data: ", forecastData);
        setData(currentWeatherData);
        setForecastData(forecastData);
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
  };

  useEffect(() => {
    getData(inputCity);
  }, []);

  return (
    <>
      <h2 className="weather-heading">Weather Api.</h2>
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
        <p>Wind Speed: {data?.wind?.speed} m/s</p>
        <p>Humidity: {data?.main?.humidity} %</p>
        <p>UV: {data?.uv} index</p>
        <p>Dew Point: {data?.dew_point} °C</p>
      </div>
      {forecastData?.list && (
        <>
          <h3 className="heading">8-Day Forecast</h3>
          <div className="forecast-container">
            {forecastData.list.slice(0, 8).map((forecast) => (
              <div key={forecast.dt} className="forecast-card">
                <p>Date: {forecast.dt_txt}</p>
                <p>Temperature: {forecast.main.temp} °C</p>
                <p>Wind Speed: {forecast.wind.speed} m/s</p>
                <p>Humidity: {forecast.main.humidity} %</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Weather;
