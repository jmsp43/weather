import React from "react";
import DayForecast from "./DayForecast";

export default function Forecast(props) {

  function KtoF(k) {
    k = Number(k);
    if (typeof k == "number") {
      let f = Math.round((k - 273.15) * (9 / 5) + 32);
      return f;
    } else console.log("k is not a number", k, typeof k);
  }
    
    

  return (
    <div>
      <h3>Forecast:</h3>
      <div className="forecast">
        {props.props.map((day, i) => {
          //console.log(day);
            let temp = KtoF(day.main.temp)
            let feel = KtoF(day.main.feels_like)
          return (
            <DayForecast
              key={i}
              date={day.dt_txt.slice(5, 10)}
              temp={temp}
              feel={feel}
              humidity={day.main.humidity}
              description={day.weather[0].description}
            />
          );
        })}
      </div>
    </div>
  );
}
