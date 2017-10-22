import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import CreatePost from './CreatePost'
import Home from './Home'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/create" component={CreatePost} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </div>
  )
}

export default App
