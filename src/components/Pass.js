import React, {Component} from 'react'
import bg from "../images/pic04.jpg"
import award from '../images/img05.png'

class Pass extends Component{
  render() {
    return (
      <div className="bg">
        <img src={bg} alt="" />
        <div className="press"><img src={award} alt="" /></div>
      </div>
    )
  }
}

export default Pass