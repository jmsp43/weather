import React from "react";
import { useState, useEffect, useRef } from "react";
import FetchWeather from "../services/FetchWeather";
import Current from "./Current";

export default function Form() {
    let inputVal = useRef();
    let unitChoice = useRef();
    let previousUnit = 'Fahrenheit'
  const [tempState, setTempState] = useState(null);
    const [feelState, setFeelState] = useState(null);
    const [baseUnit, setBaseUnit] = useState(null)
  const [neighborhoodState, setNeighborhoodState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");

  useEffect(() => {
    console.log(tempState, feelState, neighborhoodState, descriptionState);
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
          setBaseUnit(KtoF(weatherData.main.temp))
        setNeighborhoodState(weatherData.name);
        setDescriptionState(weatherData.weather[0].description);
      } else {
        console.log("then statement not working");
      }
    });
  }

  function convertUnit(unit){
      if (unit === 'Fahrenheit') {
          return baseUnit
      }
    else if (unit === 'Celcius') {
        let newDegrees = Math.round((baseUnit - 32) * (5/9));
        return newDegrees;
      }
      else if (unit === 'Kelvin') {
        let newDegrees = Math.round((baseUnit - 32) * 5/9 + 273.15)
        return newDegrees
        }
  }
    
  function KtoF(k) {
    k = Number(k);
    if (typeof(k) == "number") {
      let f = Math.round((k - 273.15) * (9 / 5) + 32);
      return f;
    } else console.log("k is not a number",k, typeof(k));
  }
    
    // function KtoC(k) {
    //     k = Number(k);
    //     if (typeof(k) == "number") {
    //       let c = Math.round(k - 273.15);
    //       return c;
    //     } else console.log("k is not a number",k, typeof(k));
    // }

    // function FtoC(f) {
    //     f = Number(f);
    //     if (typeof(f) == "number") {
    //       let c = Math.round((f - 32) * (5/9));
    //       return c;
    //     } else console.log("f is not a number",f, typeof(f));
    // }

    // function CtoF(c) {
    //     c = Number(c);
    //     if (typeof(c) == "number") {
    //       let f = Math.round((c * (9/5)) + 32);
    //       return f;
    //     } else console.log("c is not a number",c, typeof(c));
    // }

    // function FtoK(f) {
    //     f = Number(f)
    //     if (typeof (f) == 'number') {
    //         let k = Math.round((f - 32) * 5/9 + 273.15)
    //         return k
    //     }else console.log("f is not a number",f, typeof(f));
        
    // }
    // function CtoK(c) {
    //     c = Number(c);
    //     if (typeof(c) == "number") {
    //       let k = Math.round(c + 273.15);
    //       return k;
    //     } else console.log("c is not a number",c, typeof(c));
    // }



    function toggleUnit(event) {
        event.preventDefault()

        let desiredUnit = unitChoice.current.value

        setTempState(convertUnit(desiredUnit))
        setFeelState(convertUnit(desiredUnit))


        // if (desiredUnit === 'Fahrenheit' && previousUnit === 'Kelvin') {
        //     setTempState(KtoF(tempState))
        //     setFeelState(KtoF(feelState))
        //     previousUnit = 'Fahrenheit'
        // } else if (desiredUnit === 'Celcius' && previousUnit === 'Kelvin') {
        //     setTempState(KtoC(tempState))
        //     setFeelState(KtoC(feelState))
        //     previousUnit = 'Celcius'
        // } else if (desiredUnit === 'Fahrenheit' && previousUnit === 'Celcius') {
        //     setTempState(CtoF(tempState))
        //     setFeelState(CtoF(feelState))
        //     previousUnit = 'Fahrenheit'
        // }  else if (desiredUnit === 'Celcius' && previousUnit === 'Fahrenheit') {
        //     setTempState(FtoC(tempState))
        //     setFeelState(FtoC(feelState))
        //     previousUnit = 'Celcius'
        // } else if (desiredUnit === 'Kelvin' && previousUnit === 'Fahrenheit') {
        //     setTempState(FtoK(tempState))
        //     setFeelState(FtoK(feelState))
        //     previousUnit = 'Kelvin'
        // } else if (desiredUnit === 'Kelvin' && previousUnit === 'Celcius') {
        //     setTempState(CtoK(tempState))
        //     setFeelState(CtoK(feelState))
        //     previousUnit = 'Kelvin'
        // }
        // else console.log('literally why')
    }

    let units = ['Fahrenheit', 'Celcius', 'Kelvin']
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
              ref = {unitChoice}
          >
            {mapUnits}
          </select>
      <section>
        <a className="button">Home Location Weather</a>
        <a className="button">Location Services</a>
        <a className="button">Weather Appropiate Events Near You</a>
      </section>
    </div>
  );
}
