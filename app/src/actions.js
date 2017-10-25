import 'whatwg-fetch'
export const REQUEST_CREATE_POST = 'REQUEST_CREATE_POST'

export function createPost({title, description, video}) {
  return (dispatch) => {
    dispatch({type: REQUEST_CREATE_POST})
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
  }
}
