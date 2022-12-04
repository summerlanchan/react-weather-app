import React, { useState } from "react";

export default function ConvertTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === `celsius`) {
    return (
      <div className="ConvertTemperature">
        <h1 className="temperature">{Math.round(props.celsius)}</h1>
        <span>
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <span className="temperature">
        <h1>{Math.round(fahrenheit())} </h1>
        <a href="/" onclick={showCelsius}>
          °C
        </a>
        |°F
      </span>
    );
  }
}
