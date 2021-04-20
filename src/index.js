import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Temperature from "./Temperature";
import DateTime from "./DateTime";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Description from "./Description";

import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="search">
        <form id="search-bar">
          <input
            type="search"
            placeholder="Enter Your City Here"
            id="city-input"
          />
          <button type="submit" className="btn btn-outline-primary" id="btn">
            Search
          </button>
          <button
            id="current-location-button"
            type="button"
            className="btn btn-outline-primary"
          >
            <i className="fas fa-location-arrow" id="arrow-button"></i>
          </button>
        </form>
      </form>

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
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
