import React from 'react'

export default function Current(props) {
  return (
      <div className = 'currentConditions'>
          <p className='location'>{props.neighborhood}</p>
          <p className='currentTemp'>{props.temp}°</p>
          <p className = 'feelTemp'>Feels like {props.feel}°</p>
          <p className='weatherDescription'>{props.description}</p>
    </div>
  )
}
