import React from 'react'

import './Video.css'

function Video({video}) {
    console.log({video})
    return (
      <div className="Video">
        <img className="Video-poster" alt="video-poster" src={video.imgUrl} />
      </div>
    )
}

export default Video
