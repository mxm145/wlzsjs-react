import React, { Component } from 'react';
import './css/index.css'
import Index from './components/Index'
import Guide from './components/Guide'
import Pass from './components/Pass'
import GameContainer from './containers/GameContainer'
import TipContainer from './containers/TipContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      step: 1
    }
  }
  handleRoute(step){
    this.setState({
      step: step
    })
  }
  render() {
    switch(this.state.step) {
      case 1:
        return (
          <Index
            IntoGame={this.handleRoute.bind(this, 3)}
            IntoGuide={this.handleRoute.bind(this, 2)} />
        )
      case 2:
        return (
          <Guide
            IntoIndex={this.handleRoute.bind(this, 1)} />
        )
      case 3:
        return (
          <GameContainer
            nextGame={this.handleRoute.bind(this, 4)} />
        )
      case 4:
        return (
          <TipContainer
            finalStep={this.handleRoute.bind(this, 5)}
            nextStep={this.handleRoute.bind(this, 3)} />
        )
      case 5:
        return (
          <Pass />
        )
      default:
        return (
          <Index
            IntoGame={this.handleRoute.bind(this, 3)}
            IntoGuide={this.handleRoute.bind(this, 2)} />
        )
    }
  }
}

export default App;
