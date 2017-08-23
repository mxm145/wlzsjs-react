import React, {Component} from 'react'
import bg from "../images/pic01.jpg"
import press1 from '../images/img01.jpg'
import press2 from '../images/img02.jpg'

class Index extends Component{
  handleClick1(){
    if (this.props.IntoGame) {
      this.props.IntoGame()
    }
  }
  handleClick2(){
    if (this.props.IntoGuide) {
      this.props.IntoGuide()
    }
  }
  render(){
    return (
      <div className="bg">
        <img src={bg} alt="" />
        <div className="press1" onClick={this.handleClick1.bind(this)}><img src={press1} alt="" /></div>
        <div className="press2" onClick={this.handleClick2.bind(this)}><img src={press2} alt="" /></div>
      </div>
    )
  }
}

export default Index