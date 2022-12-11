import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastDays from "./ForecastDays";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

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
              <ForecastDays data={forecast[0]} />
            </div>
            <div className="col">
              <ForecastDays data={forecast[1]} />
            </div>
            <div className="col">
              <ForecastDays data={forecast[2]} />
            </div>
            <div className="col">
              <ForecastDays data={forecast[3]} />
            </div>
            <div className="col">
              <ForecastDays data={forecast[4]} />
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
