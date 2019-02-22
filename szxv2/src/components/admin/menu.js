import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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
              <li><NavLink to="/admin/personal" activeClassName='active'><span><i className="menu-icon1"></i>账户资料</span></NavLink></li>
              <li><NavLink to="/admin/capital" activeClassName='active'><span><i className="menu-icon2"></i>我的资金</span></NavLink></li>
              <li><NavLink to="/admin/orderlist" activeClassName='active'><span><i className="menu-icon3"></i>我的订单</span></NavLink></li>
              <li><NavLink to="/admin/cart" activeClassName='active'><span><i className="menu-icon4"></i>我的购物车</span></NavLink></li>
              <li><NavLink to="/admin/api" activeClassName='active'><span><i className="menu-icon5"></i>我的API</span></NavLink></li>
              <li><NavLink to="/admin/use" activeClassName='active'><span><i className="menu-icon6"></i>使用情况</span></NavLink></li>
              <li><NavLink to="/admin/collect" activeClassName='active'><span><i className="menu-icon7"></i>我的收藏</span></NavLink></li>
              <li><NavLink to="/admin/invoice" activeClassName='active'><span><i className="menu-icon8"></i>我的发票</span></NavLink></li>
              <li><NavLink to="/admin/msg" activeClassName='active'><span><i className="menu-icon9"></i>我的消息</span></NavLink></li>
              <li><NavLink to="/admin/invitation" activeClassName='active'><span><i className="menu-icon10"></i>我的邀请</span></NavLink></li>
              <li><NavLink to="/admin/key" activeClassName='active'><span><i className="menu-icon11"></i>我的Key</span></NavLink></li>
            </ul>
          </dd>
        </dl>
      </div>
    );
  }
}

export default Personal;
