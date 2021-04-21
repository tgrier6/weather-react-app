import React from "react";
import "./Temperature.css";
import DateTime from "./DateTime";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Description from "./Description";

export default function Temperature() {
  return (
    <div className="card mb-3" id="top-display">
      <div className="row g-0" id="td-weather">
        <div className="col-md-6">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="Sunshine"
            alt=""
            id="icon"
            width="300px"
          />
        </div>

        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title" id="city">
              Atlanta, GA
            </h3>
            <ul>
              <li>
                <Temperature />
              </li>
              <li>
                <DateTime />
              </li>
              <li>
                <Humidity />
              </li>
              <li>
                <Wind />
              </li>
              <li>
                <Description />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
