import React, { Fragment } from 'react'
import RandomAnswers from './../../Questions/RandomAnswer'
import TakeQuestionsByNumber from './../../Questions/TakeQuestionsByNumber'
import { withRouter } from 'react-router-dom'
import './styles.scss'
import Timer from '../Timer';

class GameForm extends React.Component {
  constructor() {
    super()
    this.state = {
      points: 0,
      actualQuestion: 0,
      questionNumber: 30,
      canClick: true,
      questions: RandomAnswers(TakeQuestionsByNumber()) || [],
      seconds: 30,
      timeToChangeQuestion: 5000,
      music: true
    }
    this.timer = 0;
  }

  startTimer = () => {
    const { seconds, timeToChangeQuestion } = this.state
    if (this.timer == 0 && seconds > 0) {
      setTimeout(() => this.timer = setInterval(this.countDown, 1000), timeToChangeQuestion)
    }
  }

  countDown = () => {
    let restSeconds = this.state.seconds - 1
    this.setState({
      seconds: restSeconds,
    })
    
    if (restSeconds === 0) { 
      this.next()
    }
  }

  next = () => {
    if (this.state.actualQuestion === 29) {
      const { history } = this.props
      history.push({
        pathname: "/Result",
        state: { result: this.state.points}
      })
    }
    clearInterval(this.timer)
    this.timer = 0
    this.setState({ 
      actualQuestion: this.state.actualQuestion + 1,
      timeToChangeQuestion: 0, 
      canClick: true,
      seconds: 30
    })
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
    this.startTimer()
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
              alt="img" 
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
        <Timer time={this.state.seconds} />
      </Fragment>
    )
  }
}

export default withRouter(GameForm)