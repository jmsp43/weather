import React from "react";
import DayForecast from "./DayForecast";


export default function Forecast({ props, convert, KtoF }) {

    
console.log(convert)
  return (
    <div>
      <h3>Forecast:</h3>
      <div className="forecast">
              {props.map((day, i) => {
                  let newTemp = 0
                  let newFeel = 0
            if (convert) {
                newTemp = convert[i].temp
                newFeel = convert[i].feel
                console.log(convert[i])
            } else {
                newTemp = KtoF(day.main.temp)
                newFeel = KtoF(day.main.feel)
                console.log(convert[i])
            }
          return (
            <DayForecast
              key={i}
              date={day.dt_txt.slice(5, 10)}
              temp={newTemp}
              feel={newFeel}
              humidity={day.main.humidity}
              description={day.weather[0].description}
            />
          );
        })}
      </div>
    </div>
  );
}
