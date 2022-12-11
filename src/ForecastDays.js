import React from "react";

import "./ForecastDays.css";

export default function ForecastDays(props) {
  function day() {
    console.log(props.data.time);
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>{" "}
      <div>
        <img
          className="WeatherForecast-icon"
          src={props.data.condition.icon_url}
          alt="icon"
        />
      </div>
      <span className="temp-max">
        {Math.round(props.data.temperature.maximum)}°C
      </span>{" "}
      <span className="temp-min">
        {Math.round(props.data.temperature.minimum)}°C
      </span>
    </div>
  );
}
