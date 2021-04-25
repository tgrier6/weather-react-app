import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  //Refreshes 5-Day Forecast- Tells that loaded is false and triggers else statement below
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="card-group">
        <div className="col-2">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "98b5711bc7358d439ba8e0b45dbf74b0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
