import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../../nav-link/my-nav-link'
import DataCenter from './data-center'
import DataTool from './data-tool'
import banner from '../../../assets/images/banner.png';

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="banner">
            <img src={banner} className='banner' alt="轮播图"/>
          </div>
          <div className="mid-nav">
            <div className="mid-nav1">
              <MyNavLink to='/home/data-center'>数据中心</MyNavLink>
            </div>
            <div className="mid-nav2">
              <MyNavLink to='/home/data-tool'>数据工具</MyNavLink>
            </div>
          </div>

          <Switch>
            <Route path='/home/data-center' component={DataCenter} />
            <Route path='/home/data-tool' component={DataTool} />
            <Redirect to='/home/data-center'/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
