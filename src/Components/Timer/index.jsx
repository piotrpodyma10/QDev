import React from 'react'
import './styles.scss'

const Timer = ({ time }) => {
  return (
    <svg className="timer" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" />
      <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5"  />
      <text x="50%" y="50%" text-anchor="middle" stroke="lawngreen" stroke-width="2px" dy=".3em">{time}</text>
    </svg>
  )
}

export default Timer