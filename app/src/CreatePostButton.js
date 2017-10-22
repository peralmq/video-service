import React from 'react'
import {Link} from 'react-router-dom'

import createPostButton from './create-button.svg'
import './CreatePostButton.css'

function CreatePostButton() {
  return (
    <div className="CreatePostButton">
      <Link to="/create">
        <img className="CreatePostButton-button" alt="create-post-button" src={createPostButton} />
      </Link>
    </div>
  )
}

export default CreatePostButton
