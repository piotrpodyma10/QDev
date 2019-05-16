import React from 'react'
import './styles.scss'
import GameForm from '../GameForm'

class GamePanel extends React.Component {
  render() {
    return (
      <div className="gamePanel">
        <GameForm />
      </div>
    )
  }
}

export default GamePanel