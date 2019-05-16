import './styles.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

class Start extends React.Component {
  go = () => {
    this.props.history.push("/Game")
  }
  
  render() {
    console.log('HH', this.props);
    
    return (
      <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="appWrapper">
          <div>
            <div className="appName">
              <Typed
                strings={[
                  '<c><</c><c2>Quiz Developerski</c2><c> /></c>',
                  '<c><</c><c2>QDev</c2><c> /></c>'
                  ]}
                  typeSpeed={40}
                  backSpeed={30} 
                  startDelay={1800}
                  backDelay={1500}
                  showCursor={false}
                   />
            </div>

            <div className="appTexts">
              <Typed
                strings={[
                  'Chcesz się sprawdzić z programowania?',
                  'Chcesz się sprawdzić z JavaScriptu?',
                  'Spróbuj rozwiązać quiz',
                  ]}
                  typeSpeed={30}
                  backSpeed={25} 
                  startDelay={7000}
                  backDelay={1000}
                  showCursor={true}
                  />
            </div>
            <Link to="/Game">
              <div className="buttonWrapper">
                <button>Rozpocznij</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Start