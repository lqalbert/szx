import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Head from './components/common/head'
import Foot from './components/common/foot'
import Home from './components/public/home/home'
// import Home from './components/public/home/support-index'
import Apply from './components/public/apply/apply'
import Admin from './components/admin/admin'

class App extends Component {

  render() {
    return (
      <div>
      	<Head />
      		<Route path="/" component={Home} />
	        <Route path="/apply" component={Apply}/>
	        <Route path="/admin" component={Admin}/>
      	<Foot />
      </div>
    );
  }
}

export default App;
