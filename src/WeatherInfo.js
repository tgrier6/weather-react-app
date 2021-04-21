import React from "react";
import DateTime from "./DateTime";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-Info">
      <div className="card mb-3" id="top-display">
        <div className="row g-0" id="td-weather">
          <div className="col-md-6">
            <img
              src={props.iconUrl}
              className="Sunshine"
              alt={props.description}
              id="icon"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" id="city">
                {props.city}
              </h3>
              <ul>
                <li className="temperature">
                  {Math.round(props.temperature)} ˚F | ˚C
                </li>
                <li>
                  <DateTime date={props.date} />
                </li>
                <li>Humidity: {props.humidity}%</li>
                <li>Wind: {Math.round(props.wind)} mph</li>
                <li className="text-capitalize">{props.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
