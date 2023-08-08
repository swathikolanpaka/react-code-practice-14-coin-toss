import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0}

  isClicked = () => {
    const tossResult = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails'

    if (tossResult === 'heads') {
      this.setState(prevCount => ({
        headsCount: prevCount + 1,
      }))
    } else {
      this.setState(preCount => ({
        tailsCount: preCount + 1,
      }))
    }
  }

  render() {
    const {headsCount, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="small-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
          />
          <div>
            <button type="button" onClick={this.isClicked}>
              Toss Coin
            </button>
          </div>
          <div className="result">
            <p>
              Total: {headsCount}+{tailsCount}
            </p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
