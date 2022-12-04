import React, { useState } from "react";
import "./WeatherApp.css";
import FooterLink from "./FooterLink.js";
import axios from "axios";
import WeatherReport from "./WeatherReport";

export default function WeatherApp(props) {
  const [weatherData, showWeatherData] = useState({ ready: false });
  const [city, citySearch] = useState(props.defaultCity);

  function handleResponse(response) {
    showWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    let apiKey = "5c4tb579c170d3950oaf761bfafb2bb9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    citySearch(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type your city"
                className="form"
                onChange={handleCityChange}
              />
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </form>
            <WeatherReport data={weatherData} />

            <FooterLink />
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
