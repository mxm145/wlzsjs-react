import React, {Component} from 'react'
import bg from "../images/pic07.jpg"
import back from '../images/img03.png'

class Guide extends Component{
  handleBack(){
    if (this.props.IntoIndex) {
      this.props.IntoIndex()
    }
  }
  render() {
    return(
      <div className="bg">
        <img src={bg} alt="" />
        <div className="txt">活动时间：<br />2017年8月22日-2017年8月26日<br />参与方式：<br />关注“云南网”官方微信，点击微信下方菜单栏“知识竞赛”，即可参与活动。<br />活动规则：<br />进入游戏后，点击屏幕交换图片位置，完成拼图后开始学习网络安全知识，完成所有关卡即有机会抽取一定金额的学习鼓励金。</div>
        <div className="back" onClick={this.handleBack.bind(this)}><img src={back} alt="" /></div>
      </div>
    )
  }
}
export default Guide