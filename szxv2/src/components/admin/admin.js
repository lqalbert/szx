import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Menu from './menu'
import Rmd from './rmd'
import PersonalWrapper from './personalWrapper'
import PayWrapper from './payWrapper'
import Capital from './capital'
import Order from './order'
import Cart from './cart'
import Api from './api'
import Use from './use'
import Collect from './collect'
import Invoice from './invoice'
import Msg from './msg'
import Invitation from './invitation'
import Key from './key'
import adminBg from '../../assets/images/admin_bg.png'

class Admin extends Component {

	constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        star: 3
      };
  }

	handleClick = (e) => {
    console.log('this is:', this);
  }

  handleChange = (value) => {
    this.setState({ star: value });
  }

  render() {
    let currentUrl = this.props.location.pathname;
    return (
      <div>
        <div className="minWrapper mb20">
          <img src={adminBg} className="img-responsive" alt="" />
        </div>
        {currentUrl.indexOf('recharge') == -1 ? (
        <div className="wrapper overflowHidden">
          <div className="adminLeft">
            <Menu />
          </div>
          <div className="adminRight">
            <Route path="/admin/rmd" component={Rmd} />
            <Route path="/admin/personal" component={PersonalWrapper} />
            <Route path="/admin/capital" component={Capital} />
            <Route path="/admin/order" component={Order} />
            <Route path="/admin/cart" component={Cart} />
            <Route path="/admin/api" component={Api} />
            <Route path="/admin/use" component={Use} />
            <Route path="/admin/collect" component={Collect} />
            <Route path="/admin/invoice" component={Invoice} />
            <Route path="/admin/msg" component={Msg} />
            <Route path="/admin/invitation" component={Invitation} />
            <Route path="/admin/key" component={Key} />
          </div>
        </div>
        ) : (
          <div className="wrapper overflowHidden">
            <Route path="/admin/recharge" component={PayWrapper} />
          </div>
        )
      }
      </div>
    );
  }
}

export default Admin;
