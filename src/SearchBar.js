import React from 'react'

export const SearchBar = (props) => {
  const {
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange,
  } = props

  return (
    <form>
      <input
        onChange={(event) => onFilterTextChange(event.target.value)}
        type="text"
        placeholder="Search..."
        value={filterText}
      />
      <p>
        <input
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
          type="checkbox"
          checked={inStockOnly}
        />{' '}
        <span style={{ color: 'green', fontSize: 'smaller' }}>
          Only show products in stock
        </span>
      </p>
    </form>
  )
}
