import React from "react";


export default function DayForecast(props) {
  console.log(props);
  return (
    <div className="dayBox">
      <div className="daily">
        <div className="insideDaily">
          <p>Date: {props.date}</p>

          <p>{props.temp}°</p>

          <p>Feel: {props.feel}°</p>

          <p>{props.humidity}% humidity</p>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
