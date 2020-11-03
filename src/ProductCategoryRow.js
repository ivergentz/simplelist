import React from 'react'

const ProductCategoryRow = (props) => {
  const { product } = props

  return (
    <tr>
      <th colSpan="2">{product.category}</th>
    </tr>
  )
}

export default ProductCategoryRow
