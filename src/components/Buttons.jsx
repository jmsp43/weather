import React from "react";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faHome } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Buttons(props) {
  let long = props.location.lon;
  let lat = props.location.lat;
  let neighborhood = props.neighborhood;
  const saveLocation = (event) => {
    event.preventDefault();
    //add a spinny thing
    if (long != "" && lat != "") {
      const location = {
        lat: lat,
        long: long,
        name: neighborhood,
      };
      localStorage.setItem("homeLocation", JSON.stringify(location));
    }
    console.log(localStorage.homeLocation)
    // console.log(getCurrentPosition(location))
    return localStorage.getItem("homeLocation");
  };
  return (
    // <Router>
    <div className="buttonsContainer">
      <Link className="button" id="home" to={"/homeLocationWeather"}>
        <FontAwesomeIcon icon={faHome} />
      </Link>

      <a onClick={saveLocation} className="button" id="save">
        <FontAwesomeIcon icon={faFloppyDisk} />
      </a>
    </div>
  );
}
