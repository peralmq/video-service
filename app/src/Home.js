import React from 'react'

import NavigationBar from './NavigationBar'
import Posts from './Posts'
import visiblePosts from './visiblePosts.js'

function Home() {
  return (
    <div className="Home">
      <NavigationBar />
      <Posts visiblePosts={visiblePosts} />
    </div>
  )
}

export default Home
