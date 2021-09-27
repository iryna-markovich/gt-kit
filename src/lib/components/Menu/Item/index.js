import React from 'react'

const Item = (props) => {
  const { data } = props
  const { icon, link, name, disabled } = data

  return (
    <a href={link} disabled={disabled}>
      {name}
    </a>
  )
}

export default Item
