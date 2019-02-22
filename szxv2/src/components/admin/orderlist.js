import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Modal, Form, Input, Select, Search, DatePicker, Table, Divider, Tag } from 'antd';

import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import face from '../../assets/images/face.png'

class Capital extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        isShowPwdModal: false,
        isShowNicknameModal: false,
        isShowPhoneModal: false,
        isShowEmailModal: false,
        columns: [{
          title: '分类',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '用途',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '交易时间',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '名称',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '交易号',
          key: 'action'
        },
        {
          title: '发生额',
          key: 'action1'
        }],
        data: [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        }]
      };
  }

  handleClick = (e) => {
    console.log('this is:', this);
  }

  setPwdModalVisible(isShowPwdModal) {
    this.setState({ isShowPwdModal });
  }

  onChangeRangePicker(date, dateString) {
    console.log(date, dateString);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ isShowPwdModal: false });
    window.$utils.showMessage('error', 'error', '-1');
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24} className="lh60 pl20 fs14 fc004ea1 bold">
            订单列表
          </Col>
          <Col span={24}>
            <Row>
              <Col span={10}>
                时间：<DatePicker.RangePicker onChange={this.onChangeRangePicker} />
              </Col>
              <Col span={6}>
                <Select defaultValue="lucy" style={{ width: '92%' }}>
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">近一个月</Select.Option>
                  <Select.Option value="disabled" disabled>Disabled</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
              </Col>
              <Col span={8}>
                <Input.Search
                  placeholder="输入搜索关键字，如API名称"
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="borderShadow mt20">
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination" />
        </div>
      </div>
    );
  }
}

export default Capital;
