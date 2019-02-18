import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Personal extends Component {

	constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {name:'Hello world!'};
  }

	handleClick = (e) => {
    console.log('this is:', this);
  }

  render() {
    return (
      <div>
        <dl className="adminMenu">
          <dt>个人中心</dt>
          <dd>
            <ul>
              <li><Link to="/zillow-group" className="active"><span>账户资料</span></Link></li>
              <li><Link to="/zillow-group"><span>我的资金</span></Link></li>
              <li><Link to="/zillow-group"><span>我的订单</span></Link></li>
              <li><Link to="/zillow-group"><span>我的购物车</span></Link></li>
              <li><Link to="/zillow-group"><span>我的API</span></Link></li>
              <li><Link to="/zillow-group"><span>使用情况</span></Link></li>
              <li><Link to="/zillow-group"><span>我的收藏</span></Link></li>
              <li><Link to="/zillow-group"><span>我的发票</span></Link></li>
              <li><Link to="/zillow-group"><span>我的消息</span></Link></li>
              <li><Link to="/zillow-group"><span>我的邀请</span></Link></li>
              <li><Link to="/zillow-group"><span>我的Key</span></Link></li>
            </ul>
          </dd>
        </dl>
      </div>
    );
  }
}

export default Personal;
