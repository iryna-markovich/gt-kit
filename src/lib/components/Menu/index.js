import React from 'react'
import config from '../../config'
import Divider from '../Divider'
import Services from '../Services'
import Item from './Item'
import './index.css'

const lib = config.lib

const Menu = (props) => {
  const { className, dataList, id, title } = props
  const classNames = className ? className : ''

  return (
    <div className={`${lib}-menu ${classNames}`} data-id={id}>
      <Services />
      <Divider />
      <div className={`${lib}-menu-title`}>{title}</div>
      {dataList.map((dataItem) => (
        <Item key={dataItem.key || dataItem.name} data={dataItem} />
      ))}
      <Divider />
    </div>
  )
}

export default Menu
