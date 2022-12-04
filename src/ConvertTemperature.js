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
      <span className="ConvertTemperature">
        {Math.round(props.celsius)}
        <span>
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature">
        {Math.round(fahrenheit())}
        <a href="/" onClick={showCelsius}>
          °C
        </a>
        |°F
      </span>
    );
  }
}
