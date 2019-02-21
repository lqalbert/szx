import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Icon4 from '../../assets/images/icon4.png'
import Wx from '../../assets/images/wx.png'
import Img1 from '../../assets/images/img1.png'

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
      <div className="borderShadow mb100">
        <div className="p20 bb bold fc333 fs16">收银台 <span className="fs14 fc666 ml10">订单号：81510101517</span></div>
        <div className="p20 mb40">
          <div className="wx-tab">
            <span><img src={Icon4} alt=""/>微信支付</span>
          </div>
          <Row className="wx-info">
            <Col span={5} className="tc">
              <img src={Wx} alt="" className="mt20" />
            </Col>
            <Col span={12} className="fc000 fs14 wx-tip">
              <div>应付金额：<span className="fcfa2c2c fs18">¥1000.00</span></div>
              <div className="bold">请使用微信扫一扫，扫描二维码支付</div>
            </Col>
            <Col span={6}>
              <img src={Img1} alt=""/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Demo;
