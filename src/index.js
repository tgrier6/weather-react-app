import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Temperature from "./Temperature";
import DateTime from "./DateTime";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Description from "./Description";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
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

      <div className="card-group">
        <div className="col-2">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="Sunshine"
            alt=""
            id="icon"
          />
          <div className="card-body">
            <h5 className="card-title">Thursday</h5>
            <p className="card-text">75 | 62</p>
            <p className="card-text">Clear skies</p>
          </div>
        </div>
        <div className="col-2">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="Sunshine"
            alt=""
            id="icon"
          />
          <div className="card-body">
            <h5 className="card-title">Friday</h5>
            <p className="card-text">81 | 68</p>
            <p className="card-text">Sunny</p>
          </div>
        </div>
        <div className="col-2">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="Sunshine"
            alt=""
            id="icon"
          />
          <div className="card-body">
            <h5 className="card-title">Saturday</h5>
            <p className="card-text">72 | 65</p>
            <p className="card-text">Cloudy</p>
          </div>
        </div>
        <div className="col-2">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="Sunshine"
            alt=""
            id="icon"
          />
          <div className="card-body">
            <h5 className="card-title">Sunday</h5>
            <p className="card-text">70 | 56</p>
            <p className="card-text">Rain</p>
          </div>
        </div>
        <div className="col-2">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="Sunshine"
            alt=""
            id="icon"
          />
          <div className="card-body">
            <h5 className="card-title">Monday</h5>
            <p className="card-text">75 | 68</p>
            <p className="card-text">Clear skies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
