import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import qs from 'query-string';

import {searchQueryChanged} from './actions'
import searchButton from './search-button.svg'
import './Search.css'

function Search(props) {
  if (props.location.search) {
    const result = qs.parse(props.location.search)
    props.onChange(result.searchQuery)
  }

  return (
    <div className="Search">
      <img className="Search-button" alt='search-button' src={searchButton} />
      <input
        className="Search-input"
        type="text"
        onChange={(ev) => props.onChange(ev.target.value, true)}/>
    </div>
  )
}

function mapDispatchToProps(dispatch, props) {
  return {
    onChange: (searchQuery, pushing) => {
      dispatch(searchQueryChanged(searchQuery))
      const historyPush = props.history.push
      if (pushing) {
        historyPush({search: qs.stringify({searchQuery})})
      }
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Search))
