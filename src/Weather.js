import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/03d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="card mb-3" id="top-display">
        <div className="row g-0" id="td-weather">
          <div className="col-md-6">
            <img
              src={weatherData.iconUrl}
              className="Sunshine"
              alt="Mostly Cloudy"
              id="icon"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" id="city">
                {weatherData.city}
              </h3>
              <ul>
                <li className="temperature">
                  {Math.round(weatherData.temperature)}F˚
                </li>
                <li>Wednesday | 19:00</li>
                <li>Humidity: {weatherData.humidity}</li>
                <li>Wind: {weatherData.wind}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "98b5711bc7358d439ba8e0b45dbf74b0";
    let city = "Atlanta";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
