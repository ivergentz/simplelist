import React from 'react'

export const ProductRow = (props) => {
  const { product } = props

  const coloredName = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  )

  return (
    <tr>
      <td>{coloredName}</td>
      <td align="right">{product.price}</td>
    </tr>
  )
}
