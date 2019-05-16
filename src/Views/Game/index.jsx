import React from 'react'
import './styles.scss'
// import './background.js'
import { background } from './background'
import GamePanel from './../../Components/GamePanel'

class Game extends React.Component {
  constructor(props) {
    super(props);
 
    this.contextRef = React.createRef();
  }
  
  componentDidMount() {
      this.context = this.contextRef.current;
      background(this.context)
  }
  
  render() {
    return (
      <div>
        <canvas ref={this.contextRef}></canvas>
        <div className="gameContainer">
          <div>
            <GamePanel />
          </div>
        </div>
      </div>
    )
  }
}

export default Game