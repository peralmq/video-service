import 'whatwg-fetch'
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAIL = 'CREATE_POST_FAIL'

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
      dispatch({type: CREATE_POST_SUCCESS})
      return response.json()
    })
    .catch((error) => {
        console.log(error);
        dispatch({type: CREATE_POST_FAIL, error})
    })
  }
}
