import {combineReducers} from 'redux'

import {
  CREATE_POST_CLEAR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
} from './actions'

const initialCreatePostState = {isLoading: false, didComplete: false, error: null}
function createPost(state=initialCreatePostState, action) {
  switch (action.type) {
    case CREATE_POST_CLEAR:
      return initialCreatePostState
    case CREATE_POST_REQUEST:
      return {...state, isLoading: false, didComplete: false, error: null}
    case CREATE_POST_SUCCESS:
      return {...state, isLoading: false, didComplete: true}
    case CREATE_POST_FAIL:
      return {...state, isLoading: false, didComplete: true, error: action.error}
    default:
      return state
  }
}

function visiblePosts(state=[], action) {
  switch (action) {
    default:
      return state
  }
}

const reducers = combineReducers({
  createPost,
  visiblePosts
})

export default reducers
