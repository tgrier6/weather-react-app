import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function searchCity() {
    const apiKey = "98b5711bc7358d439ba8e0b45dbf74b0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="all-weather">
        <div className="Weather-App">
          <form id="search-bar" onSubmit={handleSubmit}>
            <div className="search">
              <input
                type="search"
                placeholder="Enter Your City Here"
                id="city-input"
                onChange={handleCityChange}
              />
              <button
                type="submit"
                className="btn btn-outline-primary"
                id="btn"
              >
                Search
              </button>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
