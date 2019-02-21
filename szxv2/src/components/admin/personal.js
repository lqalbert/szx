import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Rate, Button, Modal, Form, Input } from 'antd';

import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import face from '../../assets/images/face.png'

class Personal extends Component {

	constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        isShowPwdModal: false,
        isShowNicknameModal: false,
        isShowPhoneModal: false,
        isShowEmailModal: false
      };
  }

	handleClick = (e) => {
    console.log('this is:', this);
  }

  setPwdModalVisible(isShowPwdModal) {
    this.setState({ isShowPwdModal });
  }

  setNicknameModalVisible(isShowNicknameModal) {
    this.setState({ isShowNicknameModal });
  }

  setPhoneModalVisible(isShowPhoneModal) {
    this.setState({ isShowPhoneModal });
  }

  setEmailModalVisible(isShowEmailModal) {
    this.setState({ isShowEmailModal });
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
        <Row className="tc adminTop fc666 borderShadow">
          <Col span={8}>
            <img src={icon1} alt="" /><br />
            <span><strong className="fc004ea1">1555</strong>个</span>
            <span className="fc999">我的API</span>
          </Col>
          <Col span={8}>
            <img src={icon2} alt="" /><br />
            <span><strong className="fce71524">15553648.00</strong>元</span>
            <span className="fc999">累积充值金额</span>
          </Col>
          <Col span={8}>
            <img src={icon3} alt="" /><br />
            <span><strong className="fcebc014">41622</strong>次</span>
            <span className="fc999">累计赠送次数</span>
          </Col>
        </Row>
        <div className="borderShadow mt20">
          <Row className="p30 fc666">
            <Col span={12}>
              <Row className="adminUser">
                <Col span={8}>
                  <img src={face} alt="" />
                </Col>
                <Col span={16}>
                  <div>账户权限：机构会员 <NavLink to="/admin/personal/vip" className="tag ml40">购买VIP</NavLink></div>
                  <div>
                    <Rate value={this.state.star} />
                  </div>
                  <div className="mt10"><a href="javascript: void(0);" className="tag bcebc014" onClick={() => this.setPwdModalVisible(true)}>修改密码</a></div>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row className="tc">
                <Col span={10} offset={4}>
                  <div className="fc20b2ef fs18 bold mt20">
                    64088.26元
                  </div>
                  <div className="fc999">资金余额</div>
                </Col>
                <Col span={10}>
                  <div className="fcebc014 fs18 bold mt20">
                    64088.26次
                  </div>
                  <div className="fc999">可用次数</div>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="pt20 pb100 fc999">
              <Row className="ptb20 bb">
                <Col className="tr fc333" span={4}>
                  公司名称
                </Col>
                <Col className="tc" span={16}>
                  ****有限公司
                </Col>
                <Col className="tc" span={4}>
                </Col>
              </Row>
              <Row className="ptb20 bb">
                <Col className="tr fc333" span={4}>
                  联系人
                </Col>
                <Col className="tc" span={16}>
                  张三
                </Col>
                <Col className="tc" span={4}>
                  <Button onClick={() => this.setNicknameModalVisible(true)}>修改</Button>
                </Col>
              </Row>
              <Row className="ptb20 bb">
                <Col className="tr fc333" span={4}>
                  手机号
                </Col>
                <Col className="tc" span={16}>
                  18888888888
                </Col>
                <Col className="tc" span={4}>
                  <Button onClick={() => this.setPhoneModalVisible(true)}>修改</Button>
                </Col>
              </Row>
              <Row className="ptb20 bb">
                <Col className="tr fc333" span={4}>
                  邮箱
                </Col>
                <Col className="tc" span={16}>
                  11@qq.com
                </Col>
                <Col className="tc" span={4}>
                  <Button onClick={() => this.setEmailModalVisible(true)}>修改</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <Modal
          title="修改密码"
          centered
          footer={null}
          visible={this.state.isShowPwdModal}
          onCancel={() => this.setPwdModalVisible(false)}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              label="原密码"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}>
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="新密码"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}>
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="确认信密码"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}>
              <Input size="large" />
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 18, offset: 5 }}
            >
              <Button type="primary" htmlType="submit" size="large" block>
                保存
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="修改昵称"
          centered
          footer={null}
          visible={this.state.isShowNicknameModal}
          onCancel={() => this.setNicknameModalVisible(false)}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              className="mtb20"
              wrapperCol={{ span: 18, offset: 3 }}>
              <Input size="large" placeholder="请输入用户昵称，不超过6个字符" />
            </Form.Item>
            <Form.Item
              className="mtb20"
              wrapperCol={{ span: 18, offset: 3 }}
            >
              <Button type="primary" htmlType="submit" size="large" block>
                确定
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="修改手机号"
          centered
          footer={null}
          visible={this.state.isShowPhoneModal}
          onCancel={() => this.setPhoneModalVisible(false)}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              label="新手机号"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}>
              <Input.Group size="large">
                <Col span={15}>
                  <Input placeholder="请输入手机号" />
                </Col>
                <Col span={8}>
                  <Button size="large">获取短信验证码</Button>
                </Col>
              </Input.Group>
            </Form.Item>
            <Form.Item
              label="短信验证码"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}>
              <Input.Group size="large">
                <Col span={15}>
                  <Input placeholder="请输入验证码" />
                </Col>
                <Col span={8}></Col>
              </Input.Group>
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 18, offset: 5 }}
            >
              <Input.Group size="large">
                <Col span={15}>
                  <Button type="primary" htmlType="submit" size="large" block>
                保存
              </Button>
                </Col>
                <Col span={8}></Col>
              </Input.Group>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          centered
          footer={null}
          visible={this.state.isShowEmailModal}
          onCancel={() => this.setEmailModalVisible(false)}>
          <Form onSubmit={this.handleSubmit}>
            <div className="fs16 fc000 mt40 mb20 tc"><strong>邮箱验证</strong></div>
            <div className="fc999 tc mb20"><span>当前邮箱125@qq.com</span></div>
            <Form.Item
              wrapperCol={{ span: 18, offset: 3 }}>
              <Input.Group size="large">
                <Col span={15}>
                  <Input placeholder="请输入手机号" />
                </Col>
                <Col span={8}>
                  <Button size="large">获取手机验证码</Button>
                </Col>
              </Input.Group>
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 18, offset: 3 }}
            >
              <Input.Group size="large">
                <Col span={24}>
                  <Button type="primary" htmlType="submit" size="large" block className="fs14">
                下一步
              </Button>
                </Col>
                <Col span={8}></Col>
              </Input.Group>
            </Form.Item>
          </Form>
        </Modal>
        
        <Modal
          centered
          footer={null}
          visible={this.state.isShowEmailModal}
          onCancel={() => this.setEmailModalVisible(false)}>
          <Form onSubmit={this.handleSubmit}>
            <div className="fs16 fc000 mt40 mb20 tc"><strong>邮箱验证</strong></div>
            <div className="fc999 tc mb20"><span>当前邮箱125@qq.com</span></div>
            <Form.Item
              wrapperCol={{ span: 18, offset: 3 }}>
              <Input.Group size="large">
                <Col span={15}>
                  <Input placeholder="请输入邮箱" />
                </Col>
                <Col span={8}>
                  <Button size="large">获取邮箱验证码</Button>
                </Col>
              </Input.Group>
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 18, offset: 3 }}
            >
              <Input.Group size="large">
                <Col span={24}>
                  <Button type="primary" htmlType="submit" size="large" block className="fs14">
                下一步
              </Button>
                </Col>
                <Col span={8}></Col>
              </Input.Group>
            </Form.Item>
          </Form>
        </Modal>

      </div>
    );
  }
}

export default Personal;
