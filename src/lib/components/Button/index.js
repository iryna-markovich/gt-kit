import React from 'react'
import config from '../config'

const Button = (props) => {
  const theme = config.theme ? config.theme : 'red'
  return (
    <button
      className={`${config.lib}-btn ${config.lib}-btn--${props.type} ${props.className}`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onClick={props.onClick}
      style={{ background: theme }}
    >
      {props.children}
    </button>
  )
}

export default Button
