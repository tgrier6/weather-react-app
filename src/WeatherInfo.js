import React from "react";
import DateTime from "./DateTime";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card mb-3" id="top-display">
        <div className="row g-0" id="td-weather">
          <div className="col-md-6">
            <img
              src={props.data.iconUrl}
              className="Sunshine"
              alt={props.data.description}
              id="icon"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" id="city">
                {props.data.city}
              </h3>
              <ul>
                <li className="temperature">
                  {Math.round(props.data.temperature)} ˚F | ˚C
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
