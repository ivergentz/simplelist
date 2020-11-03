import React from 'react'

export const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />{' '}
        <span style={{ color: 'green', fontSize: 'smaller' }}>
          Only show products in stock
        </span>
      </p>
    </form>
  )
}
