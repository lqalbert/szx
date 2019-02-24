import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';

import banner from '../../../assets/images/banner.png';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


export default class Organization extends React.Component {

  render () {
    return (

      <div className="organization">
        <div className="banner">
          <img src={banner} className='banner' alt="轮播图"/>
        </div>
        <div className="organization-apply">
          <Row className="base-info">
            <Col span={4}>公司基本资料</Col>
            <br/>
            <hr/>
            <br/>
          </Row>
          <Row className="a1">
            <Col span={11}>
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
