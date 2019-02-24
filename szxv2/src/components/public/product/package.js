import React from 'react'
import { Row, Col, Icon, Pagination, Button  } from 'antd';

import logo from '../../../assets/images/logo.png';
import banner from '../../../assets/images/banner.png';

export default class Package extends React.Component {

  render () {
    return (

      <div className="package">
        <div className="banner">
          <img src={banner} className='banner' alt="轮播图"/>
        </div>
        <div className="package-wrap">
          <div className="package-intro">
            <Row className="intro">
              <Col span={4} className="package-name">股票行情服务</Col>
              <Col span={4} offset={16} className="right">
                <Icon type="like" theme="twoTone" className="like"/>
                <span className="num">888</span>
                <Icon type="star" theme="twoTone" className="star"/>
                <span className="keep">收藏</span>
              </Col>
            </Row>
            <div className="package-info">
              <Row>
                <Col span={24} clsssName="content">获取交易所股票日行情，包含，历史追溯到1990年。</Col>
              </Row>
              <Row className="interfaces">
                <Col span={24} clsssName="">包含的接口：接口1，接口2，接口3</Col>
              </Row>
              <Row>
                <Col span={4}>
                  <span className="regular">普通用户</span>
                  <span className="recharge">收费</span>
                </Col>
              </Row>
            </div>
          </div>



          <div className="pagination">
            <div className="page"><Pagination showQuickJumper defaultCurrent={1} total={100} onChange={onChange} itemRender={itemRender} pageSize={3}/></div>
            <div className="jumper"><Button>确定</Button></div>
          </div>
        </div>
      </div>
    )
  }
}

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}
function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>上一页</a>;
  } if (type === 'next') {
    return <a>下一页</a>;
  }
  return originalElement;
}