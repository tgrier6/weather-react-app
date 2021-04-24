import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "98b5711bc7358d439ba8e0b45dbf74b0";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="card-group">
      <div className="col-2">
        <WeatherIcon code="01d" />
        <div className="card-body">
          <h5 className="card-title">Thursday</h5>
          <p className="card-text">
            <strong>75</strong> | 62
          </p>
          <p className="card-text">Clear skies</p>
        </div>
      </div>
      <div className="col-2">
        <WeatherIcon code="01d" />
        <div className="card-body">
          <h5 className="card-title">Friday</h5>
          <p className="card-text">
            <strong>81</strong> | 68
          </p>
          <p className="card-text">Sunny</p>
        </div>
      </div>
      <div className="col-2">
        <WeatherIcon code="01d" />
        <div className="card-body">
          <h5 className="card-title">Saturday</h5>
          <p className="card-text">
            <strong>72</strong> | 65
          </p>
          <p className="card-text">Cloudy</p>
        </div>
      </div>
      <div className="col-2">
        <WeatherIcon code="01d" />
        <div className="card-body">
          <h5 className="card-title">Sunday</h5>
          <p className="card-text">
            <strong>70</strong> | 56
          </p>
          <p className="card-text">Rain</p>
        </div>
      </div>
      <div className="col-2">
        <WeatherIcon code="01d" />
        <div className="card-body">
          <h5 className="card-title">Monday</h5>
          <p className="card-text">
            <strong>75</strong> | 68
          </p>
          <p className="card-text">Clear skies</p>
        </div>
      </div>
    </div>
  );
}
