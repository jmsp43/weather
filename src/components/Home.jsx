//not in use for 5/2/23 deadline

import React from "react";
import { useState, useEffect, useRef } from "react";
import HomeForecastFetch from "../services/HomeForecastFetch";
import Current from "./Current";
import Forecast from "./Forecast";
import HomeWeatherFetch from "../services/HomeWeatherFetch";
import App from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link } from "react-router-dom";

export default function Home({ homeLocation }) {
  let unitChoice = useRef();
  const [tempState, setTempState] = useState(null);
  const [feelState, setFeelState] = useState(null);
  const [baseUnit, setBaseUnit] = useState(null);
  const [baseFeel, setBaseFeel] = useState(null);
  const [neighborhoodState, setNeighborhoodState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [convertState, setConvertState] = useState("");
  const [forecastState, setForecastState] = useState([]);


  function convertUnit(unit, base) {
    if (unit === "Fahrenheit") {
      return base;
    } else if (unit === "Celcius") {
      let newDegrees = Math.round((base - 32) * (5 / 9));
      return newDegrees;
    } else if (unit === "Kelvin") {
      let newDegrees = Math.round(((base - 32) * 5) / 9 + 273.15);
      return newDegrees;
    }
  }

  function KtoF(k) {
    k = Number(k);
    if (typeof k == "number") {
      let f = Math.round((k - 273.15) * (9 / 5) + 32);
      return f;
    } else console.log("k is not a number", k, typeof k);
  }


  let home = JSON.parse(homeLocation);
  console.log(home);

  function onRender(event) {
    event.preventDefault()

  let lat = home.lat;
  let long = home.long;
  let neighborhood = home.neighborhood;
  //create error message if zip code is invalid


  let weather = HomeWeatherFetch(lat, long);

  weather.then((weatherData) => {
    if (weatherData) {
      setTempState(KtoF(weatherData.main.temp));
      setFeelState(KtoF(weatherData.main.feels_like));
      setBaseUnit(KtoF(weatherData.main.temp));
      setBaseFeel(KtoF(weatherData.main.feels_like));
      setNeighborhoodState(weatherData.name);
      setDescriptionState(weatherData.weather[0].description);
      setLocationState(weatherData.coord);
    } else {
      console.log("then statement not working");
    }
  });

  let forecast = HomeForecastFetch(lat, long);
  let forecastArr = [];
  forecast.then((forecastData) => {
    if (forecastData) {
      let hourly = forecastData.list;
      hourly.map((hours) => {
        if (hours.dt_txt.slice(11, 20) === "12:00:00") {
          forecastArr.push(hours);
        }
      });
      setForecastState(forecastArr);
    } else {
      console.log("then statement not working");
    }
  });
  if (weatherData || forecastArr) {
    console.log(weatherData)
    console.log(forecastArr)
  }
  }
  addEventListener('load', (event) => {onRender(event)});



  function toggleUnit(event) {
    event.preventDefault();

    let desiredUnit = unitChoice.current.value;
    setTempState(convertUnit(desiredUnit, baseUnit));
    setFeelState(convertUnit(desiredUnit, baseFeel));
  }

  let units = ["Fahrenheit", "Celcius", "Kelvin"];
  const mapUnits = units.map((unit, i) => {
    return (
      <option key={i} value={unit}>
        {unit}
      </option>
    );
  });



  return (
    <div>
      <Current
        temp={tempState}
        feel={feelState}
        neighborhood={neighborhoodState}
        description={descriptionState}
      />

      <select
        onChange={toggleUnit}
        placeholder="unit dropdown"
        id="unitChoice"
        name="unitChoice"
        ref={unitChoice}
      >
        {mapUnits}
      </select>

      <Forecast props={forecastState} convert={convertState} KtoF={KtoF} />

      <section>

          <Routes> 
        <Route path="/" element={<App />}></Route>
        <Link className="button" id="form" to={"/"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        </Routes>

      </section>
    </div>
  );
}
