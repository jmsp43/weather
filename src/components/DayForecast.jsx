import React from "react";


export default function DayForecast(props) {
  return (
    <div className="dayBox">
      <div className="daily">
        <div className="insideDaily">
          <p>{props.day}, {props.date}</p>

          <p>{props.temp}°</p>

          <p>Feel: {props.feel}°</p>

          <p>{props.humidity}% humidity</p>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
