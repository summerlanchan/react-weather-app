import React from "react";
import ConvertTemperature from "./ConvertTemperature";
import FormatDate from "./FormatDate";

export default function WeatherReport(props) {
  return (
    <div className="WeatherReport">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>
              <img src={props.data.icon} alt={props.data.description} />{" "}
              <ConvertTemperature celsius={props.data.temperature} />
            </p>
          </div>
          <div className="col-6">
            <ul>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
