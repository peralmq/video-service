import {combineReducers} from 'redux'

import {
  CREATE_POST_CLEAR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
  SEARCH_QUERY_CHANGED,
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

const initialPostsState = {
  isLoading: false,
  error: null,
  data: [],
  visibleData: [],
  searchQuery: null
}
function visiblePostsData(data, searchQuery) {
  if (!searchQuery) {
    return data
  }
  return data.filter(({description}) => description.indexOf(searchQuery) !== -1)
}
function posts(state=initialPostsState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {...state, isLoading: true, error: null}
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.data,
        visibleData: visiblePostsData(action.data, state.searchQuery)
      }
    case FETCH_POSTS_FAIL:
      return {...state, isLoading: false, error: action.error}
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        data: action.data.concat(state.data),
        visibleData: visiblePostsData(action.data.concat(state.data), state.searchQuery)
      }
    case SEARCH_QUERY_CHANGED:
      return {
        ...state,
        searchQuery: action.searchQuery,
        visibleData: visiblePostsData(state.data, action.searchQuery)
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  createPost,
  posts,
})

export default reducers
