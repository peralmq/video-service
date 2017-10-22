import React from 'react'

import Search from './Search'
import CreatePostButton from './CreatePostButton'
import './NavigationBar.css'

function NavigationBar() {
  return (
    <div className="NavigationBar">
        <Search />
        <CreatePostButton />
    </div>
  )
}

export default NavigationBar
