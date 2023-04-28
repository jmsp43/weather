import React from "react";
import { useState, useEffect, useRef } from "react";
import FetchWeather from "../services/FetchWeather";
import Current from "./Current";
import Forecast from "./Forecast";
import FetchForecast from "../services/FetchForecast";
import Buttons from "./Buttons";

export default function Form() {
  let inputVal = useRef();
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

  useEffect(() => {
    //console.log(tempState, feelState, neighborhoodState, descriptionState);
  }, [tempState, feelState, neighborhoodState, descriptionState]);

  function handleSubmit(event) {
    event.preventDefault();

    let zip = inputVal.current.value.slice(0, 5);
    let country = inputVal.current.value.slice(7, 9);
    //create error message if zip code is invalid
    let weather = FetchWeather(zip, country);

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

    let forecast = FetchForecast(zip, country);

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
  }

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

  let convertedTemp = 0;
  let convertedFeel = 0;
  forecastState.map((day) => {
    convertedTemp = KtoF(day.main.temp);
    convertedFeel = KtoF(day.main.feels_like);
  });

  function toggleUnit(event) {
    event.preventDefault();

    let desiredUnit = unitChoice.current.value;
    // const mapForecast = forecastState.map((day, i) => {
    //   let baseTemp = KtoF(day.main.temp);
    //   let baseForecastFeel = KtoF(day.main.feels_like);
    //   return {
    //     key: { i },
    //     convertedTemp: convertUnit(desiredUnit, baseTemp),
    //     convertedFeel: convertUnit(desiredUnit, baseForecastFeel),
    //   };
    // });
    //use forecastarr instead of manip the actal state bc i need to
    const mapForecast = forecastState.map((day, i) => {
      let baseTemp = KtoF(day.main.temp);
      let baseForecastFeel = KtoF(day.main.feels_like);
      convertedTemp = convertUnit(desiredUnit, baseTemp);
      convertedFeel = convertUnit(desiredUnit, baseForecastFeel);
      console.log(day.dt_txt, ",", convertedTemp, ",", convertedFeel);

      return {
        key: i,
        temp: convertedTemp,
        feel: convertedFeel,
      };
    });

    setConvertState(mapForecast);
    console.log(mapForecast);

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
      <Forecast props={forecastState} convert={convertState} KtoF={KtoF} />

      <Buttons location={locationState} neighborhood={neighborhoodState} />
    </div>
  );
}
