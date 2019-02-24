import React from 'react'
import { Row, Col, Input, Select } from 'antd';

import banner from '../../../assets/images/banner.png';


export default class Setpwd extends React.Component {

  render () {
    return (

      <div className="apply">
        <div className="banner">
          <img src={banner} className='banner' alt="轮播图"/>
        </div>
        <div className="oversea-apply">
          <Row className="create-account">
            <Col span={4}>Set your Password</Col>
          </Row>
          <Row className="a1">
            <Col span={11}>
              <p>CREATE A PASSWORD</p>
              <Input placeholder="Type here..." type="password"/>
            </Col>
            <Col span={11} offset={2}>
              <p>CONFIRM YOUR PASSWORD</p>
              <Input placeholder="Type here..." type="password" />
            </Col>
          </Row>

          <Row>
            <Col span={2} offset={10} className="next">
              <div>PREVIOUS</div>
            </Col>
            <Col span={2} offset={1} className="next">
              <div>SUBMIT</div>
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}
