import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

import Img3 from '../../assets/images/img3.png'

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
            <img src={Img3} alt="" />
          </Col>
          <Col span={12}>
          </Col>
          <Col span={24}>
            <Row className="lh30 mtb20">
              <Col span={24} className="tc fs16 fc333">
                恭喜您，已购买成功
              </Col>
              <Col span={12} className="tr">
                支付金额：
              </Col>
              <Col span={12}>
                <strong className="fcfa2c2c bold">168.00</strong>元
              </Col>
            </Row>
          </Col>
          <Col span={24} className="tc">
            <Button className="mr20">查看会员权益</Button>
            <Button className="mr20">查看购物车</Button>
            <Button className="mr20">我的个人主页</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo;
