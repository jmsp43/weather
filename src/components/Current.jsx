import React from 'react'

export default function Current(props) {
  return (
      <div className = 'currentConditions'>
          <p>Current Conditions in {props.neighborhood}:</p>
          <p>{props.temp}°</p>
          <p>Feels Like: {props.feel}°</p>

          <p>{props.description}</p>
    </div>
  )
}
