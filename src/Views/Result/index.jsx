import React from 'react'
import './styles.scss'
import ResultModal from '../../Components/ResultModal'

class Result extends React.Component {
  render() {
    const points = this.props.location.state ? this.props.location.state.result : 0
    return (
      <div className="resultView">
        <ResultModal points={points} />
      </div>
    )
  }
}

export default Result