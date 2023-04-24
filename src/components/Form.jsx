import React from "react";
import { useState, useEffect, useRef } from "react";
import FetchWeather from "../services/FetchWeather";

export default function Form() {
  let inputVal = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    //set state of zip and country code
    //send to App
    let zip = inputVal.current.value.slice(0, 5);
    let country = inputVal.current.value.slice(7, 9);
    console.log(zip, country);
    FetchWeather(zip, country);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="zip code, country code"
          ref={inputVal}
        ></input>
      </form>
    </div>
  );
}
