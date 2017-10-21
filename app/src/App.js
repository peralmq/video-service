import React from 'react'

import NavigationBar from './NavigationBar'
import Posts from './Posts'
import visiblePosts from './visiblePosts.js'
import './App.css'

function App() {
  return (
    <div className="App">
    <NavigationBar />
    <Posts visiblePosts={visiblePosts} />
    </div>
  )
}

export default App
