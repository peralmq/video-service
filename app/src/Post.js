import React from 'react'

import Title from './Title'
// import Video from './Video'
// import Votes from './Votes'
// import TextBody from './TextBody'
import './Post.css'

function Post({title, video, votes, textBody}) {
    return (
      <div className="Post">
        <Title title={title} />
        <div className="Video">{video}</div>
        <div className="Votes">{votes}</div>
        <div className="TextBody">{textBody}</div>
      </div>
    )
}

export default Post
