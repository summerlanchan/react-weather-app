import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecast} />
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
