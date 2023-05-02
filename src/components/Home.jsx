import React from "react";
import { useState, useEffect, useRef } from "react";
import HomeForecastFetch from "../services/HomeForecastFetch";
import Current from "./Current";
import Forecast from "./Forecast";
import HomeWeatherFetch from "../services/HomeWeatherFetch";

export default function Form({homeLocation}) {
  let unitChoice = useRef();
  const [weatherState, setWeatherState] = useState(null);
  const [forecastState, setForecastState] = useState([])

  useEffect(() => {
    console.log(weatherState, forecastState);
  }, [weatherState, forecastState]);

  let lat = homeLocation.lat
  let long = homeLocation.long
    //create error message if zip code is invalid
    let weather = HomeWeatherFetch(lat, long);

    weather.then((weatherData) => {
      if (weatherData) {
        setWeatherState(weatherData);
      } else {
        console.log("then statement not working");
      }
    });

    let forecast = HomeForecastFetch(lat,long);
    let forecastArr = []
    forecast.then((forecastData) => {
        if (forecastData) {

            let hourly = forecastData.list;
            hourly.map(hours => {
                if (hours.dt_txt.slice(11, 20) === '12:00:00') {
                    forecastArr.push(hours)
                }
            })
            setForecastState(forecastArr)
      } else {
        console.log("then statement not working");
      }
    });


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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="zip code, country code"
          ref={inputVal}
        ></input>
      </form>

      <Current
        temp={tempState}
        feel={feelState}
        neighborhood={neighborhoodState}
        description={descriptionState}
      />

      <label htmlFor="unitChoice">Choose Units:</label>
      <br></br>
      <select
        onChange={toggleUnit}
        placeholder="unit dropdown"
        id="unitChoice"
        name="unitChoice"
        ref={unitChoice}
      >
        {mapUnits}
      </select>
      <br></br>
      <Forecast
        props = {forecastState}
      />
      <section>
        <a className="button">Home Location Weather</a>
        <a className="button">Location Services</a>
        <a className="button">Weather Appropiate Events Near You</a>
      </section>
    </div>
  );
}