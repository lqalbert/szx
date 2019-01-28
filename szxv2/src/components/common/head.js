import React, { Component } from 'react';
import { Button } from 'antd';
import {
  Link
} from 'react-router-dom';

class Head extends Component {

	constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {name:'Hello world!'};
  }

	handleClick = (e) => {
    window.$utils.showMessage();
  }

  render() {
    return (
      <div>
        <h1>this is head <Button type="primary" onClick={this.handleClick}>Primary</Button></h1>
        <Link to="/">首页</Link>
        <Link to="/apply">申请开户</Link>
        <Link to="/admin/personal">个人中心</Link>
      </div>
    );
  }
}

export default Head;
