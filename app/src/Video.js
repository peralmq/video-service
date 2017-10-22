import React, {Component} from 'react'

import playButton from './play-button.svg'
import './Video.css'

class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPlaying: false,
    }
  }

  render() {
    const {video} = this.props
    const {isPlaying} = this.state
    return (
      <div className="Video">
        <video
          ref="video"
          className="Video-player"
          width="99%"
          height="99%"
          playsInline
          controls={isPlaying ? 1 : 0}
          onEnded={() => this.setState({isPlaying: false})}
        >
          <source src={video.url} type={video.file.type} />
          I'm sorry, your browser doesn't support HTML5 video.
        </video>
        {
          !isPlaying &&
          <img
            className="Video-play-button"
            alt="play-button"
            src={playButton}
            onClick={() => {
              this.setState({isPlaying: true})
              this.refs.video.play()
            }}
            />
        }
      </div>
    )
  }
}
export default Video
