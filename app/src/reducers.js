import {combineReducers} from 'redux'

import {
  CREATE_POST_CLEAR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL
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

function posts(state={isLoading: false, error: null, data: []}, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {...state, isLoading: true, error: null}
    case FETCH_POSTS_SUCCESS:
      return {...state, isLoading: false, error: null, data: action.data}
    case FETCH_POSTS_FAIL:
      return {...state, isLoading: false, error: action.error}
    case CREATE_POST_SUCCESS:
      return {...state, data: action.data.concat(state.data)}
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
  posts,
  visiblePosts
})

export default reducers
