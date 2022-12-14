import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherReport(props) {
  return (
    <div className="WeatherReport">
      <h1 className="city-name">{props.data.city}</h1>
      <ul>
        <li className="date-info">
          <FormatDate date={props.data.date} />
        </li>
        <li className="date-info text-capitalize">{props.data.description}</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="weatherIcon"
              />{" "}
              <span className="weatherUnit">
                {Math.round(props.data.temperature)}°C
              </span>
            </p>
          </div>
          <div className="col-sm-6">
            <ul>
              <li className="weather-condition">
                Wind: {Math.round(props.data.wind)} km/h
              </li>
              <li className="weather-condition">
                Humidity: {props.data.humidity}%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
