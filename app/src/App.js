import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import CreatePost from './CreatePost'
import Home from './Home'
import reducers from './reducers'
import './App.css'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Route path="/create" component={CreatePost} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    </Provider>
  )
}

export default App
