import React, { Fragment } from 'react'
import Questions from './../../Questions'
import RandomAnswers from './../../Questions/RandomAnswer'
import TakeQuestionsByNumber from './../../Questions/TakeQuestionsByNumber'
import { withRouter } from 'react-router-dom'
import './styles.scss'

class GameForm extends React.Component {
  constructor() {
    super()
    this.state = {
      points: 0,
      actualQuestion: 0,
      questionNumber: 30,
      canClick: true,
      questions: RandomAnswers(TakeQuestionsByNumber()) || [],
      seconds: 5
    }
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let restSeconds = this.state.seconds - 1;
    this.setState({
      seconds: restSeconds,
    });
    
    if (restSeconds == 0) { 
      clearInterval(this.timer);
      this.next()
    }
  }

  next = () => {
    if (this.state.actualQuestion === 29) {
      const { history } = this.props
      history.push("/Result")
    }
    this.setState({ 
      actualQuestion: this.state.actualQuestion + 1, 
      canClick: true,
      seconds: 5
    })
    this.timer = 0;
    this.startTimer()
  }

  value = (index) => {
    const { questions, actualQuestion, points, canClick } = this.state
    
    if (index === questions[actualQuestion].goodAnswerIndex && canClick) {
      this.setState({ points: points + 10 })
    }
    
    this.setState({ canClick: false })
  }

  colorBorder = (index) => {
    const { questions, actualQuestion, canClick } = this.state

    if (!canClick) {
      if (index === questions[actualQuestion].goodAnswerIndex) return { borderColor: 'lawngreen', backgroundColor: 'black' }

      return { borderColor: 'red', backgroundColor: 'black' }
    }
  }

  render() {
    const { questions, actualQuestion, questionNumber } = this.state
    return (
      <Fragment>

        <div className="gameForm">
          <div className="question">
            <div className="questionText">{questions[actualQuestion].question}</div>
            <div className="questionNumber">{actualQuestion} / {questionNumber}</div>
          </div>
          <div className="image">
            <img 
              src={require(`../../Questions/imgs/${questions[actualQuestion].imgId}`)} 
              height="300" 
              width="550" 
            />
          </div>
          <div className="answers">
              <div 
                className="answerA" 
                onClick={() => this.value(0)}
                style={this.colorBorder(0)}
              > 
                {questions[actualQuestion].answers[0]}
              </div>
            <div 
              className="answerB" 
              onClick={() => this.value(1)}
              style={this.colorBorder(1)}
            >
              {questions[actualQuestion].answers[1]}
            </div>
            <div 
              className="answerC" 
              onClick={() => this.value(2)}
              style={this.colorBorder(2)}
            >
              {questions[actualQuestion].answers[2]}
            </div>
            <div 
              className="answerD" 
              onClick={() => this.value(3)}
              style={this.colorBorder(3)}
            >
              {questions[actualQuestion].answers[3]}
            </div>
          </div>
          <div className="submit">
            <button
              className="submitButton"
              onClick={this.next}
              style={{ backgroundColor: 'green', height: '50px;'}}
            >
              Next please!!
            </button>
          </div>
        </div>
        <div className="TIMER" style={{position: "absolute", top:"0", left: "0", backgroundColor:"green"}}>
          <button onClick={this.startTimer}> Start </button>
          S: {this.state.seconds}
        </div>
      </Fragment>
    )
  }
}

export default withRouter(GameForm)