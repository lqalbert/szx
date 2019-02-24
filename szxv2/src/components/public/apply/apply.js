import React, { Component } from 'react';
import { Route } from "react-router-dom";

import OverSeas from './overseas'
import SetPwd from './setpwd'
import Subsuccess from './subsuccess'
import Organization from './organization'

class Home extends Component {

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
        <Route path="/apply/overseas" component={OverSeas} />
        <Route path="/apply/setpwd" component={SetPwd} />
        <Route path="/apply/subsuccess" component={Subsuccess} />
        <Route path="/apply/organization" component={Organization} />
      </div>
    );
  }
}

export default Home;
