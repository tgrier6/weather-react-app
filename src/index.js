import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
