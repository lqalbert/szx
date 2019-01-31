import React, { Component } from 'react';
import { Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';
import banner from '../../assets/images/banner.png';

class Head extends Component {

  render() {
    return (
      <div>
        <div className="top">
          <img src={logo} className='logo' alt="logo"/>
          <div className="title">深证信数据服务平台</div>
          <div className="nav">
            <Link to="/" className="link nav1">首页</Link>
            <Link to="/" className="link nav2">数据栏目</Link>
            <img src={avatar} className="avatar" alt="用户头像"/>
            <Link to="/" className="link nav3">昵称</Link>
            <Badge count={5}>
              <Icon type="shopping-cart" className="shopCar"/>
            </Badge>
            <Link to="/" className="link nav4" >支持</Link>
          </div>
        </div>
        <div className="banner">
          <img src={banner} className='banner' alt="轮播图"/>
        </div>
      </div>
    );
  }
}

export default Head;
