import {combineReducers} from 'redux'

function visiblePosts(state=[], action) {
  switch (action) {
    default:
      return state
  }
}

const reducers = combineReducers({
  visiblePosts
})

export default reducers
