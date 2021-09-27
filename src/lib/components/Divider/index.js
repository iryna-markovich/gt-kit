import React from 'react'
import config from '../../config'
import './index.css'

const lib = config.lib

const Divider = (props) => {
  const { className, id } = props
  const classNames = className ? className : ''

  return <div className={`${lib}-divider ${classNames}`} data-id={id} />
}

export default Divider
