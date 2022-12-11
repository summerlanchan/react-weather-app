import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{forecast[0].time}</div>{" "}
      <div className="WeatherForecast-icon">
        <img src={props[0].condition.icon_url} alt="icon" />
      </div>
      <span className="temp-max">
        {Math.round(props[0].temperature.maximum)}°C
      </span>{" "}
      <span className="temp-min">
        {Math.round(props[0].temperature.minimum)}°C
      </span>
    </div>
  );
}
