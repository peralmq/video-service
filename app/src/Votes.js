import React from 'react'

import thumbDown from './thumb-down.svg'
import thumbUp from './thumb-up.svg'

import './Votes.css'

function Votes({votes}) {
    return (
      <div className="Votes">
        <span className="Votes-up">
          <span className="Votes-up-number">
            {votes.up}
          </span>
          <img className="Votes-thumb" alt="thumb-up" src={thumbUp}/>
        </span>
        <span className="Votes-down">
          <img className="Votes-thumb" alt="thumb-down" src={thumbDown} />
          <span className="Votes-down-number">
            {votes.down}
          </span>
        </span>
      </div>
    )
}

export default Votes
