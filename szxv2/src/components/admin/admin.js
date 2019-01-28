import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Personal from './personal'

class Admin extends Component {

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
        admin
        <Route path="/admin/personal" component={Personal} />
      </div>
    );
  }
}

export default Admin;
