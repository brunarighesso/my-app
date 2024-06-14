import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C | <a href="/">°F</a>
        </span>
      </div>
    );
  } else {
    return "F";
  }
}
