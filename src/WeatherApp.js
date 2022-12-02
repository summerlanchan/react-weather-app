import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, showWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    showWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="card">
          <div className="card-body">
            <form>
              <input
                type="search"
                placeholder="Type your city"
                className="form"
              />
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Wednesday 4:00</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <p>
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                      alt="rain"
                    />{" "}
                    {Math.round(weatherData.temperature)} <a href="#">°C</a>|
                    <a href="#">°F</a>
                  </p>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Precipitation:20%</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>Coded by Victoria</footer>
      </div>
    );
  } else {
    let apiKey = "5c4tb579c170d3950oaf761bfafb2bb9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
