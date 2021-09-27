import React from 'react'
import config from '../../config'
import './index.css'

const lib = config.lib

const Services = (props) => {
  const { children, className, id } = props
  const classNames = className ? className : ''

  return (
    <div className={`${lib}-services ${classNames}`} data-id={id}>
      {children}
    </div>
  )
}

export default Services
