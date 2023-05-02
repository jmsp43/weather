import React from "react";
import DayForecast from "./DayForecast";


export default function Forecast({ props, convert, KtoF }) {

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return (
    <div>
      <div className="forecast">

        
              {props.map((day, i) => {
                  let newTemp = 0
                let newFeel = 0
                let fullDate = new Date(day.dt_txt.slice(0, 10))
                let numOfDay = fullDate.getDay()+1
                if (numOfDay >= 7) {
                 numOfDay -= 7
                }
                let dayOfWeek = daysOfWeek[numOfDay]
            if (convert) {
                newTemp = convert[i].temp
                newFeel = convert[i].feel
            } else {
                newTemp = KtoF(day.main.temp)
                newFeel = KtoF(day.main.feels_like)
            }
          return (
            <DayForecast
              key={i}
              date={day.dt_txt.slice(5, 10)}
              day={dayOfWeek}
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
