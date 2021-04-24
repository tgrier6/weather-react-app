import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherForecastData(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}˚`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}˚`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col-2">
      <WeatherIcon code={props.data.weather[0].icon} size={90} />
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <p className="card-text">
          <strong>{maxTemperature()}</strong> | {minTemperature()}
        </p>
        <p className="card-text">Clear skies</p>
      </div>
    </div>
  );
}
