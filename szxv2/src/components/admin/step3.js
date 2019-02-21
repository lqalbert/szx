import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Img2 from '../../assets/images/img2.png'

class Demo extends Component {

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
        <Row className="fc000 ptb100">
          <Col span={24} className="tc">
            <img src={Img2} alt="" />
            <p className="fs18 bold lh40">充值成功</p>
          </Col>
          <Col span={12}>
          </Col>
          <Col span={24}>
            <Row className="lh30">
              <Col span={12} className="tr">
                收款商户名：
              </Col>
              <Col span={12}>
                深圳信信息有限公司
              </Col>
              <Col span={12} className="tr">
                支付金额：
              </Col>
              <Col span={12}>
                <strong className="fcfa2c2c bold">168.00</strong>
              </Col>
              <Col span={12} className="tr">
                订单号：
              </Col>
              <Col span={12}>
                15229649874
              </Col>
              <Col span={24} className="tc mt20">
                <span className="fc fcfa2c2c">12</span>秒后跳转到我的资金，或点此[<a href="" className="fc004ea1">直接跳转</a>]
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo;
