import React from 'react'

export default function Current(props) {
  return (
      <div className = 'currentConditions'>
          <p>Current Conditions:</p>
          <p>Temperature: {props.temp} degrees</p>
          <p>Feels Like: {props.feel} degrees</p>
          <p>{props.neighborhood}</p>
          <p>{props.description}</p>
    </div>
  )
}
