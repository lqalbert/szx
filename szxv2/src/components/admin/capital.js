import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Rate, Button, Modal, Form, Input, DatePicker, Table, Divider, Tag } from 'antd';

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
        <Row className="tc fc666 borderShadow">
          <Col span={6} className="ptb20">
            <p><strong className="fce71524 fs24">15553648.00</strong>元</p>
            <p className="fc999">我的API</p>
          </Col>
          <Col span={6} className="ptb20">
            <Button type="primary" size="large" className="mt20">去充值</Button>
          </Col>
          <Col span={6} className="ptb20 bl">
            <p><strong className="fce71524 fs24">1555364</strong>次</p>
            <p className="fc999">可用赠送币</p>
          </Col>
          <Col span={6} className="ptb20">
            <Button type="primary" size="large" className="mt20">去获得</Button>
          </Col>
        </Row>
        <div className="borderShadow mt20">
          <div className="lh60 pl20 fs14 fc004ea1 bold bgf7f9fc bbb1c9e2">
            我的账单
          </div>
          <div className="plr20 fc666 filter">
            <Row className="pt20">
              <Col span={2}>
                时间：
              </Col>
              <Col span={20}>
                <DatePicker.RangePicker onChange={this.onChangeRangePicker} />
              </Col>
            </Row>
            <Row className="pt20">
              <Col span={2}>
                分类：
              </Col>
              <Col span={20}>
                <span className="filter-text"><i>全部</i></span>
                <span className="filter-text active"><i>充值</i></span>
                <span className="filter-text"><i>消费</i></span>
              </Col>
            </Row>
            <Row className="ptb20">
              <Col span={2}>
                用途：
              </Col>
              <Col span={20}>
                <span className="filter-text disabled"><i>全部</i></span>
                <span className="filter-text disabled"><i>购买权限</i></span>
                <span className="filter-text disabled"><i>购买服务</i></span>
                <span className="filter-text disabled"><i>接口使用</i></span>
              </Col>
            </Row>
          </div>
        </div>
        <div className="borderShadow mt20">
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination" />
        </div>
      </div>
    );
  }
}

export default Capital;
