import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Radio, Row, Col, Modal, Icon, Tag } from 'antd';

class Demo extends Component {

	constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        invoiceModalVisible: false,
        zyInvoiceModalVisible: false,
        addInvoiceModalVisible: false,
        invoiceType: '',
        addType: 1
      };
  }

	handleClick = (e) => {
    console.log('this is:', this);
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      invoiceType: e.target.value,
    });

    if(e.target.value == 1) {
      this.setInvoiceModalVisible(true);
      this.setZYInvoiceModalVisible(false);
    }else {
      this.setInvoiceModalVisible(false);
      this.setZYInvoiceModalVisible(true);
    }
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      invoiceType: e.target.value,
    });

    if(e.target.value == 1) {
      this.setInvoiceModalVisible(true);
      this.setZYInvoiceModalVisible(false);
    }else {
      this.setInvoiceModalVisible(false);
      this.setZYInvoiceModalVisible(true);
    }
  }

  onAddTypeChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      addType: e.target.value,
    });
  }

  setInvoiceModalVisible(invoiceModalVisible) {
    this.setState({
      invoiceModalVisible
    });
  }

  setZYInvoiceModalVisible(zyInvoiceModalVisible) {
    this.setState({
      zyInvoiceModalVisible
    });
  }

  setAddInvoiceModalVisible(addInvoiceModalVisible) {
    this.setState({
      addInvoiceModalVisible
    });
  }

  go = () => {
    this.props.history.push('/admin/recharge/step2');
  }

  render() {
    return (
      <div>
        <div className="wrapper borderShadow mb100 fc333">
          <div className="p20 bb bold fc333">填写充值金额</div>
          <Row className="ptb40 bb">
            <Col span={12} className="tr">
              充值账户：
            </Col>
            <Col span={12} className="tl">
              <div className="ml10">aisy888</div>
            </Col>
          </Row>
          <div className="ptb20 bb">
            <Row className="">
              <Col span={12} className="tr">
                <span className="lh32">充值金额：</span>
              </Col>
              <Col span={12} className="tl">
                <div className="ml10"><Input placeholder="1000起充" className="fc333" style={{width: '170px'}} />  注：充值10000元即可赠送3000次使用次数</div>
              </Col>
            </Row>
            <Row className="pb10 pt20">
              <Col span={12} className="tr">
                开具发票：
              </Col>
              <Col span={12} className="tl">
                <div className="ml10"><Checkbox className="mt0 fc333">开具发票</Checkbox></div>
              </Col>
            </Row>
            <Row className="ptb10">
              <Col span={12} className="tr"></Col>
              <Col span={12} className="tl">
                <div className="ml10">
                  <Radio.Group onChange={this.onChange} value={this.state.invoiceType}>
                    <Radio value={1} className="fc333">普通发票</Radio>
                    <Radio value={2} className="fc333">增值税专用发票</Radio>
                  </Radio.Group>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12} className="tr"></Col>
              <Col span={12} className="tl">
                <div className="ml10">普通发票/专用发票 公司名称 数据服务 <Button size="small">修改</Button></div>
              </Col>
            </Row>
            <Row>
              <Col span={12} className="tr"></Col>
              <Col span={12} className="tl">
                <div className="ml10"><Checkbox className="w100_ fc333">我已阅读并接受《充值服务条款》</Checkbox></div>
              </Col>
            </Row>
          </div>
          <Row className="ptb40">
            <Col span={12} className="tr"></Col>
            <Col span={12} className="tl">
              <div className="ml10"><Button type="primary" onClick={this.go}>下一步</Button></div>
            </Col>
          </Row>
        </div>

        <Modal
          centered
          width="800px"
          footer={null}
          closable={false}
          visible={this.state.invoiceModalVisible}
          onCancel={() => this.setInvoiceModalVisible(false)}>
          <div className="tr">
            <Button type="primary" onClick={() => {this.setInvoiceModalVisible(false); this.setAddInvoiceModalVisible(true)}}>新增发票模板</Button>
          </div>
          <div className="invoice-box">
            <div className="invoice-item borderShadow p10 mt10">
              <div className="invoiceItem-title">
                <Button type="primary" size="small">默认模板</Button>
                <Icon type="close"  className="fr fs30 fc999"/>
              </div>
              <div className="invoiceItem-body fc333 fs12">
                <Row>
                  <Col span={24}>
                    <Row className="mt10 lh30">
                      <Col span={6} className="tr">
                        单位名称：
                      </Col>
                      <Col span={18}>
                        创世纪环球有限公司
                      </Col>
                      <Col span={6} className="tr">
                        纳税人识别号：
                      </Col>
                      <Col span={18}>
                        1155 565652. 222
                      </Col>
                      <Col span={6} className="tr">
                        收票人手机：
                      </Col>
                      <Col span={18}>
                        1362656563
                      </Col>
                      <Col span={6} className="tr">
                        收票人邮箱：
                      </Col>
                      <Col span={18}>
                        1362656563
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="invoiceItem-foot tr mt20">
                <Button>编辑</Button>
              </div>
            </div>
            <div className="invoice-item borderShadow p10 mt10">
              <div className="invoiceItem-title">
                <Radio value={1} className="fc333"></Radio>
                <Icon type="close"  className="fr fs30 fc999"/>
              </div>
              <div className="invoiceItem-body fc333 fs12">
                <Row>
                  <Col span={12}>
                    <Row className="mt10 lh30">
                      <Col span={12} className="tr">
                        单位名称：
                      </Col>
                      <Col span={12}>
                        创世纪环球有限公司
                      </Col>
                      <Col span={12} className="tr">
                        纳税人识别号：
                      </Col>
                      <Col span={12}>
                        1155 565652. 222
                      </Col>
                      <Col span={12} className="tr">
                        收票人手机：
                      </Col>
                      <Col span={12}>
                        1362656563
                      </Col>
                      <Col span={12} className="tr">
                        收票人邮箱：
                      </Col>
                      <Col span={12}>
                        1362656563
                      </Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row className="mt10 lh30">
                      <Col span={12} className="tr">
                        单位名称：
                      </Col>
                      <Col span={12}>
                        创世纪环球有限公司
                      </Col>
                      <Col span={12} className="tr">
                        纳税人识别号：
                      </Col>
                      <Col span={12}>
                        1155 565652. 222
                      </Col>
                      <Col span={12} className="tr">
                        收票人手机：
                      </Col>
                      <Col span={12}>
                        1362656563
                      </Col>
                      <Col span={12} className="tr">
                        收票人邮箱：
                      </Col>
                      <Col span={12}>
                        1362656563
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="invoiceItem-foot tr mt20">
                <Button type="primary" className="mr10">设为默认</Button>
                <Button>编辑</Button>
              </div>
            </div>
          </div>
          <div className="tc pt40 pb20">
            <Button type="primary" className="mr20" onClick={() => this.setInvoiceModalVisible(false)}>保存</Button>
            <Button onClick={() => this.setInvoiceModalVisible(false)} className="ml20">取消</Button>
          </div>
        </Modal>

        <Modal
          centered
          width="800px"
          footer={null}
          closable={false}
          visible={this.state.zyInvoiceModalVisible}
          onCancel={() => this.setZYInvoiceModalVisible(false)}>
          <div className="invoice-box borderShadow p10">
            <div>
              <Tag color="#ebc014" className="ptb10">普通发票</Tag>
            </div>
            <Row className="mt20">
              <Col span={12}>
                <Form.Item
                  label="名称"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="纳税人识别号"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="地址"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="公司电话"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="开户行"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="账号"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="收票人姓名"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="收票人手机"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="收票人电话"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="收票人地址"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <div className="tc pt40 pb20">
            <Button type="primary" className="mr20" onClick={() => this.setZYInvoiceModalVisible(false)}>保存</Button>
            <Button onClick={() => this.setZYInvoiceModalVisible(false)} className="ml20">取消</Button>
          </div>
        </Modal>

        <Modal
          centered
          width="800px"
          footer={null}
          closable={false}
          visible={this.state.addInvoiceModalVisible}
          onCancel={() => this.setAddInvoiceModalVisible(false)}>
          <div className="invoice-box borderShadow p10">
            <div>
              <Tag color="#ebc014" className="ptb10">普通发票</Tag>
            </div>
            <Row className="mt20">
              <Col span={24}>
                <Form.Item
                  wrapperCol={{ span: 17, offset: 3 }}>
                  <Radio.Group onChange={this.onAddTypeChange} value={this.state.addType}>
                    <Radio value={1}>个人</Radio>
                    <Radio value={2}>公司</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            { this.state.addType == 1 ? (
              <Row className="mt20">
              <Col span={24}>
                <Form.Item
                  label="发票抬头"
                  labelCol={{ span: 3 }}
                  wrapperCol={{ span: 8 }}>
                  <Input width="200" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="发票人手机"
                  labelCol={{ span: 3 }}
                  wrapperCol={{ span: 8 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="收票人地址"
                  labelCol={{ span: 3 }}
                  wrapperCol={{ span: 8 }}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            ) : (
            <Row className="mt20">
              <Col span={12}>
                <Form.Item
                  label="单位名称"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="纳税人识别号"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="收票人手机"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="收票人地址"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 17 }}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            )
          }
          </div>
          <div className="tc pt40 pb20">
            <Button type="primary" className="mr20" onClick={() => this.setAddInvoiceModalVisible(false)}>保存</Button>
            <Button onClick={() => this.setAddInvoiceModalVisible(false)} className="ml20">取消</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Demo;
