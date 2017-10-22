import React from 'react'

import './CreatePost.css'

function CreatePost() {
  return (
    <div className="CreatePost">
      <h1 className="CreatePost-header">Create a new post</h1>
      <form className="CreatePost-table">
        <div className="CreatePost-row">
          <label className="CreatePost-label" htmlFor="title">Title:</label>
          <input className="CreatePost-data" id="title" type="text" required maxLength="64" autoFocus/>
        </div>
        <div className="CreatePost-row">
          <label className="CreatePost-label" htmlFor="description">Description:</label>
          <textarea className="CreatePost-data" id="description" type="text" required maxLength="256" rows="4" />
        </div>
        <div className="CreatePost-row">
          <label className="CreatePost-label" htmlFor="video">Video:</label>
          <input className="CreatePost-data" id="video" type="file" required />
        </div>
        <input className="CreatePost-button" type="submit" value="Create" />
      </form>
    </div>
  )
}

export default CreatePost
