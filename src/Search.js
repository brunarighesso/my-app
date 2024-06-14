import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState("celsius");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  let form = (
    <form className="Form" onSubmit={handleSubmit}>
      <input type="search" placeHolder="Type a city" onChange={updateCity} />
      <input className="button" type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul className="result">
          <li>
            Temperature: {Math.round(weather.temperature)}°C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
