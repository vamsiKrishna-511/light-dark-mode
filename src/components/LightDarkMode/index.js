// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  renderLightDarkButton = () => {
    const {isDarkMode} = this.state

    if (isDarkMode === false) {
      return (
        <button type="button" className="btn" onClick={this.onClickButton}>
          Light Mode
        </button>
      )
    }
    return (
      <button type="button" className="btn" onClick={this.onClickButton}>
        Dark Mode
      </button>
    )
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          {this.renderLightDarkButton()}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
