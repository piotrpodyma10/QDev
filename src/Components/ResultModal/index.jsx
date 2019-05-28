import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

class ResultModal extends React.Component {
  levelRender(points) {
    if (points <= 100) return "Powinieneś zacząć się uczyć!"
    if (points > 100 && points <= 140) return "Brakuje Ci jeszcze trochę do Junior Developera"
    if (points > 140 && points < 200) return "Junior Developer"
    if (points => 200 && points < 280) return "Regular Developer"
    if (points => 280) return "Senior Developer"
  }

  render() {
    const { points } = this.props
    return (
      <div className="resultModal">
        <div className="modalWrapper">
          <div className="title part">Twój wynik</div>
          <div className="score part">{points} / 300</div>
          <div className="yourLevel part">Twój poziom: {this.levelRender(points)}</div>
          <div className="startAgain part">
            <Link to="/">
              <button>Rozpocznij quiz ponownie</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultModal