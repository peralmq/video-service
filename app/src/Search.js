import React from 'react'
import {connect} from 'react-redux'

import {searchQueryChanged} from './actions'
import searchButton from './search-button.svg'
import './Search.css'

function Search(props) {
  return (
    <div className="Search">
      <img className="Search-button" alt='search-button' src={searchButton} />
      <input className="Search-input" type="text" onChange={props.onChange}/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (ev) => {
      const searchQuery = ev.target.value
      console.log({searchQuery})
      dispatch(searchQueryChanged(searchQuery))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
