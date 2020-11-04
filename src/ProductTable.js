import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

export const ProductTable = (props) => {
  const { filterText, inStockOnly, products } = props
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return
    }

    if (inStockOnly && !product.stocked) {
      return
    }

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow product={product} key={product.category} />)
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <table width="100%">
      <thead>
        <tr style={{ color: 'blue' }}>
          <th align="left">Name</th>
          <th align="right">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
