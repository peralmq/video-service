import React from 'react'

import Title from './Title'
 import Video from './Video'
import Votes from './Votes'
import TextBody from './TextBody'
import './Post.css'

// function Post({title, video, votes, textBody}) {
function Post({title, video, description}) {
    const votes = {
      up: (Math.random() * 100).toFixed(0),
      down: (Math.random() * 100).toFixed(0),
    }
    return (
      <div className="Post">
        <Title title={title} />
        <Video video={video} />
        <Votes votes={votes} />
        <TextBody textBody={description} />
      </div>
    )
}

export default Post
