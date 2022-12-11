import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [icon, setIcon] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setIcon(response.data.daily.condition);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="forecast-day">Mon</div>{" "}
              <div className="WeatherForecast-icon">
                <img src={icon.icon_url} alt="icon" />
              </div>
              <span className="temp-max">
                {Math.round(forecast[0].temperature.maximum)}°C
              </span>{" "}
              <span className="temp-min">
                {Math.round(forecast[0].temperature.minimum)}°C
              </span>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  } else {
    let city = props.data.city;
    let apiKey = "5c4tb579c170d3950oaf761bfafb2bb9";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
