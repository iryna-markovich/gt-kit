import React from 'react'
import config from '../../config'
import './index.css'

const lib = config.lib

const Badge = (props) => {
  const { children, className, id, size, type } = props
  const badgeType = type ? type : 'default'
  const badgeSize = size ? size : 'm'
  const classNames = className ? className : ''

  return (
    <div
      className={`${lib}-badge ${lib}-badge--${badgeType} ${lib}-badge--${badgeSize} ${classNames}`}
      data-id={id}
    >
      {children}
    </div>
  )
}

export default Badge
