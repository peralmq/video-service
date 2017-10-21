import React from 'react'

import Title from './Title'
 import Video from './Video'
import Votes from './Votes'
import TextBody from './TextBody'
import './Post.css'

function Post({title, video, votes, textBody}) {
    return (
      <div className="Post">
        <Title title={title} />
        <Video video={video} />
        <Votes votes={votes} />
        <TextBody textBody={textBody} />
      </div>
    )
}

export default Post
