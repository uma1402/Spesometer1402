import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  accelarate = () => {
    this.setState(value1 => ({count: value1.count + 10}))
  }

  break = () => {
    this.setState(value1 => ({count: value1.count - 10}))
  }

  return() {
    const {count} = this.state

    return (
      <div className="bg">
        <h1 className="main-h1">SPEEDOMETER</h1>
        <div>
          <h1 className="speed">Speed is {count}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button type="button" className="b1" onClick={this.accelarate}>
              Accelerate
            </button>

            <button type="button" className="b2" onClick={this.break}>
              Apply Break
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
