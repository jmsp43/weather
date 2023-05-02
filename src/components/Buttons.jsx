import React from 'react'
import Home from './Home'

export default function Buttons(props) {

    let long = props.location.lon
    let lat = props.location.lat
    let neighborhood = props.neighborhood
    const saveLocation = () => {
        if (long != '' && lat != '') {
            //get a save icon from font awesome and attach it to here so on click it saves
            const location = {
                lat: lat,
                long: long,
                name: neighborhood,
                // zip: zipCode,
                // country: countryCode
            };
            localStorage.setItem("homeLocation", JSON.stringify(location));
        }
        return localStorage.getItem('homeLocation')
    };
 console.log(localStorage.homeLocation)
  return (
      <div>
    

    <a onClick={saveLocation} className="button" id = 'save'>Save Location as Home</a>
    {/* <i className = 'fa fa-floppy-disk'></i> */}
        <a className="button" id = 'home'>Home Location Weather</a>
          {/* <Home
              homeLocation={localStorage.homeLocation} /> */}
    </div>
  )
}
