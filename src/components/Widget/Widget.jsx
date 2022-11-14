import React from 'react'
import './widget.scss'

const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
          <span className="title">USERS</span>
          <span className="counter">21312</span>
          <span className="link">See all user</span>
        </div>
        <div className="right">right</div>
    </div>
  )
}

export default Widget