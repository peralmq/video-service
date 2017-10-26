import 'whatwg-fetch'

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAIL = 'CREATE_POST_FAIL'
export const CREATE_POST_CLEAR = 'CREATE_POST_CLEAR'

export function clearCreatePost() {
  return (dispatch) => dispatch({type: CREATE_POST_CLEAR})
}

export function createPost({title, description, video}) {
  return (dispatch) => {
    dispatch({type: CREATE_POST_REQUEST})
    fetch('/api/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        video,
      })
    })
    .then(response => {
      if (response.status !== 201) {
        throw Error(`Bad status code: ${response.status}`)
      }
      return response.json().then(data => dispatch({type: CREATE_POST_SUCCESS, data}))
    })
    .catch((error) => {
        console.log(error);
        dispatch({type: CREATE_POST_FAIL, error})
    })
  }
}

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL'

export function fetchPosts() {
  return (dispatch) => {
    dispatch({type: FETCH_POSTS_REQUEST})
    fetch('/api/posts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status !== 200) {
        throw Error(`Bad status code: ${response.status}`)
      }
      return response.json().then(data => dispatch({type: FETCH_POSTS_SUCCESS, data}))
    })
    .catch((error) => {
        console.log(error);
        dispatch({type: FETCH_POSTS_FAIL, error})
    })
  }
}

export const SEARCH_QUERY_CHANGED = 'SEARCH_QUERY_CHANGED'
export const searchQueryChanged = (searchQuery) => ({type: SEARCH_QUERY_CHANGED, searchQuery})
