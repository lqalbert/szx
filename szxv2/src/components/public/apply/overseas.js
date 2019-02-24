import React from 'react'
import { Row, Col, Input, Select, Button } from 'antd';

import banner from '../../../assets/images/banner.png';

const Search = Input.Search;
const Option = Select.Option;

export default class Overseas extends React.Component {

  render () {
    return (

      <div className="apply">
        <div className="banner">
          <img src={banner} className='banner' alt="轮播图"/>
        </div>
        <div className="oversea-apply">
          <Row className="create-account">
            <Col span={4}>Create your Account</Col>
          </Row>
          <Row className="a1">
            <Col span={11}>
              <p>FIRST NAME</p>
              <Input placeholder="Type here..." />
            </Col>
            <Col span={11} offset={2}>
              <p>LAST NAME</p>
              <Input placeholder="Type here..." />
            </Col>
          </Row>
          <Row className="a2">
            <Col span={11}>
              <p>COMPANY NAME</p>
              <Input placeholder="Type here..." />
            </Col>
            <Col span={11} offset={2}>
              <p>BUSINESS EMAIL</p>
              <Input placeholder="Type here..." />
            </Col>
          </Row>
          <Row className="a3">
            <Col span={11}>
              <p>CAPTCHA</p>
              <Search
                placeholder="input search text"
                enterButton="send out"
                size="middle"
              />
            </Col>
            <Col span={11} offset={2}>
              <p>JOB TITLE</p>
              <Input placeholder="Type here..." />
            </Col>
          </Row>
          <Row className="a4">
            <Col span={11}>
              <p>CAPTCHA</p>
              <Select
                placeholder="Select a person"
                style={{ width: 300 }}
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col span={11} offset={2}>
              <p>JOB TITLE</p>
              <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Select a person"
                optionFilterProp="children"

                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={2} offset={11} className="next"><div>NEXT</div></Col>
          </Row>
        </div>

      </div>
    )
  }
}
