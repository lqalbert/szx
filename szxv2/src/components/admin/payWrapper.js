import React, { Component } from 'react';
import { Route } from "react-router-dom";

import adminBg from '../../assets/images/admin_bg.png'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'

class PayWrapper extends Component {

  render() {
    return (
      <div>
		<Route exact path="/admin/recharge" component={Step1} />
        <Route path="/admin/recharge/step2" component={Step2} />
        <Route path="/admin/recharge/step3" component={Step3} />
        <Route path="/admin/recharge/step4" component={Step4} />
      </div>
    );
  }
}

export default PayWrapper;
