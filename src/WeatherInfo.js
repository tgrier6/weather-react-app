import React from "react";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card mb-3" id="top-display">
        <div className="row g-0" id="td-weather">
          <div className="col-md-6">
            <div className="float-center">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" id="city">
                {props.data.city}
              </h3>
              <ul>
                <li>
                  <WeatherTemperature fahrenheit={props.data.temperature} />
                </li>
                <li>
                  <DateTime date={props.data.date} />
                </li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)} mph</li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
