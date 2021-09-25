import React from 'react'
import config from '../config'

const Badge = (props) => {
  return (
    <div
      className={`${config.lib}-badge ${config.lib}-badge--${props.type} ${props.className}`}
      data-id={props.id}
    >
      {props.children}
    </div>
  )
}

export default Badge
