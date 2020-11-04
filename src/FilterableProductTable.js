import React, { useState } from 'react'
import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

export default function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  const { products } = props

  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText)
  }

  const handleInStockOnlyChange = (inStockOnly) => {
    setInStockOnly(inStockOnly)
  }

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}
