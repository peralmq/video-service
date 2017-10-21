import React from 'react'

import Post from './Post'
import './Posts.css'

function Posts({visiblePosts}) {
    return (
      <div className="Posts">
        {visiblePosts.map(post => <Post key={post.id} {...post} />)}
      </div>
    )
}

export default Posts
