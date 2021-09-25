import React from 'react'
import config from '../config'
import './index.css'

const lib = config.lib

const Button = (props) => {

  return (
    <button
      className={`${lib}-btn ${lib}-btn--${props.type} ${props.className}`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
