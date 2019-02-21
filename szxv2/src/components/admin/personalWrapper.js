import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Personal from './personal'
import Vip from './vip'

class PersonalWrapper extends Component {

  render() {
    return (
      <div>
        <Route exact path="/admin/personal" component={Personal} />
        <Route path="/admin/personal/vip" component={Vip} />
      </div>
    );
  }
}

export default PersonalWrapper;
