import React from 'react'

export default function Current(props) {
  return (
    <div className='currentConditions'>
      <div className='currentTempBox'>
      <p className='currentTemp'>{props.temp}°</p>
      </div>
      <div className = 'otherCurrentConditionsBox'>
          <p className='location'>{props.neighborhood}</p>
          <p className = 'feelTemp'>Feels like {props.feel}°</p>
        <p className='weatherDescription'>{props.description}</p>
        </div>
    </div>
  )
}
