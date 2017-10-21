import React from 'react'

import NavigationBar from './NavigationBar'
import Posts from './Posts'

function Home(props) {
  return (
    <div className="Home">
      <NavigationBar />
      <Posts />
    </div>
  )
}

export default Home
