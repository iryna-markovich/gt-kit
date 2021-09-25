import React from 'react'
import config from '../../config'
import './index.css'

const lib = config.lib

const Button = (props) => {
  const { children, className, disabled, id, onClick, size, type } = props
  const btnType = type ? type : 'default'
  const btnSize = size ? size : 'm'
  const classNames = className ? className : ''

  return (
    <button
      className={`${lib}-btn ${lib}-btn--${btnType} ${lib}-btn--${btnSize} ${classNames}`}
      data-id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
