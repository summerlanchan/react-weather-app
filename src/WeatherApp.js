import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherApp.css";
import FooterLink from "./FooterLink.js";
import WeatherReport from "./WeatherReport";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp(props) {
  const [weatherData, showWeatherData] = useState({ ready: false });
  const [city, citySearch] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    showWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
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
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-control-lg d-flex align-items-start">
                  <input
                    type="text"
                    placeholder="Type your city"
                    className="form"
                    onChange={handleCityChange}
                  />

                  <button onClick={handleSubmit}>Search</button>
                </div>
              </form>
              <WeatherReport data={weatherData} /> <hr />
              <WeatherForecast data={weatherData} />
              <FooterLink />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
