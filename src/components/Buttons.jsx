import React from 'react'

export default function Buttons(props) {

    console.log(props)
    let long = props.location.lon
    let lat = props.location.lat
    const saveLocation = () => {
        if (long != '' && lat != '') {
            //get a save icon from font awesome and attach it to here so on click it saves
            const location = {
                name: neighborhood,
                lat: lat,
                long: long,
            };
            localStorage.setItem("homeLocation", JSON.stringify(location));
        }
    };

  return (
      <div>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        Buttons */}
          <div>
              And stuff
          </div>
        <a className="button" id = 'save'><i class = 'fa fa-floppy-disk'>Save Current Location as Home</i></a>
        <a className="button" id = 'home'>Home Location Weather</a>
        <a className="button">Weather Appropiate Events Near You</a>
    </div>
  )
}
