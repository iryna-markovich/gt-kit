import React from 'react'
import config from '../../config'
import './index.css'

const lib = config.lib

const Main = (props) => {
  const { children, className, id } = props
  const classNames = className ? className : ''

  return (
    <div className={`${lib}-main ${classNames}`} data-id={id}>
      {children}
    </div>
  )
}

export default Main
