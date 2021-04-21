import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Description from "./Description";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
      <ul>
        <li className="temperature">{Math.round(temperature)}</li>
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
    );
  } else {
    const apiKey = "98b5711bc7358d439ba8e0b45dbf74b0";
    let city = "Atlanta";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
