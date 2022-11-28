import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="card">
        <div className="card-body">
          <form>
            <input type="search" placeholder="Type your city" />
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </form>
          <h1>Kai city</h1>
          <ul>
            <li>Wednesday 4:00</li>
            <li>Cloudy</li>
          </ul>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                    alt="rain"
                  />{" "}
                  10 <a href="#">°C</a>|<a href="#">°F</a>
                </p>
              </div>
              <div className="col-6">
                <ul>
                  <li>Precipitation:20%</li>
                  <li>Wind:1 km/h</li>
                  <li>Humidity:100%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>Coded by Victoria</footer>
    </div>
  );
}
