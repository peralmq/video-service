import React from 'react'

import './TextBody.css'

function TextBody({textBody}) {
    return (
      <div className="TextBody">
        <div className="TextBody-text">
          {textBody}
          <div className="TextBodyReadMore">
            <span className="TextBodyReadMore-text">
              Read more
            </span>
          </div>
        </div>
      </div>
    )
}

export default TextBody
