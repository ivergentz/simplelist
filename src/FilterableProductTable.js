import React from 'react'
import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

export default function FilterableProductTable(props) {
  const { products } = props

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
