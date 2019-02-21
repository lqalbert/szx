import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Breadcrumb, Form, Input, Button, Modal } from 'antd';


class Demo extends Component {

	constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        isShowModal: false
      };
  }

	handleClick = (e) => {
    console.log('this is:', this);
  }

  toggleShowModal(isShowModal) {
    this.setState({ isShowModal });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isShowModal: true });
  }

  jump = (e) => {
   this.props.history.push('/admin/recharge')
  }

  render() {
    return (
      <div>
        <div className="borderShadow">
          <div className="ptb10 mlr20 bb">
            <Breadcrumb>
              <Breadcrumb.Item>账户资料</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">购买VIP</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="p40 m20 vip-box">
            <h1>VIP会员权限：</h1>
            <p>1、每个月赠送次数；</p>
            <p>2、单个API每天调用次数增加；</p>
            <p>3、邀请好友额外赠送次数；</p>
            <p>4、其他权限；</p>
          </div>
          <div className="">
            <Form onSubmit={this.handleSubmit} className="Vipform">
              <Form.Item
                label="当前VIP到期日"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                2015-10-20
              </Form.Item>
              <Form.Item
                label="开通时长"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Input />
              </Form.Item>
              <Form.Item
                label="应付金额"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <i className="fce71524">999.00</i> 元
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 16, offset: 8 }}
              >
                <Button type="primary" htmlType="submit">
                  确定
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <Modal
          title=""
          centered
          footer={null}
          visible={this.state.isShowModal}
          onCancel={() => this.toggleShowModal(false)}
          className="vip-confirm"
        >
          <p className="tc mtb40">您本次购买一年期VIP服务，价格<span className="fce71524">999.00</span>元<br/>请点击确定购买</p>
          <p className="tc">
            <Button type="primary" onClick={() => this.jump()}>
                  确定
            </Button>
            <a onClick={() => this.toggleShowModal(false)} className="fc337ac4 mt20">取消</a>
          </p>
        </Modal>
      </div>
    );
  }
}

export default Demo;
