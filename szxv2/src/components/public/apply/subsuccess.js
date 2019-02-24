import React from 'react'
import { Row, Col, Icon } from 'antd';

import banner from '../../../assets/images/banner.png';


export default class Subsuccess extends React.Component {

  render () {
    return (

      <div className="apply">
        <div className="banner">
          <img src={banner} className='banner' alt="轮播图"/>
        </div>
        <div className="oversea-apply">
          <Row className="check" type="flex" justify="space-around" align="middle">
            <Col span={4} >
              <div ><Icon type="check" /></div>
            </Col>
          </Row>
          <Row className="subsuc">
            <Col span={4} offset={10}>SUBMIT SUCCESSFULLY</Col>
          </Row>
          <Row className="sub-tip">
            <Col span={6} offset={10}>Your submit has been submitted, please be patient and wait for the audits</Col>
          </Row>
        </div>

      </div>
    )
  }
}
