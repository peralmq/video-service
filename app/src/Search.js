import React from 'react'

import searchButton from './search-button.svg'
import './Search.css'

function Search() {
  return (
    <div className="Search">
      <img className="Search-button" alt='search-button' src={searchButton} />
      <input className="Search-input" type="text" />
    </div>
  )
}

export default Search
