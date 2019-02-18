import React, { Component } from 'react';
import { Carousel, Row, Col } from 'antd';
import Ad1 from '../../../assets/images/ad1.jpg';
import Ad2 from '../../../assets/images/ad2.jpg';
import Ad3 from '../../../assets/images/ad3.jpg';
import Ad4 from '../../../assets/images/ad4.jpg';
import Ad5 from '../../../assets/images/ad5.jpg';
import Ad11 from '../../../assets/images/ad11.jpg';
import Ad12 from '../../../assets/images/ad12.jpg';
import Ad13 from '../../../assets/images/ad13.jpg';

class Demo extends Component {

	constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {name:'Hello world!'};
  }

	handleClick = (e) => {
    console.log('this is:', this);
  }

  render() {
    return (
      <div>
        <div className="minWrapper">
          <Carousel>
            <div><img src={Ad13} /></div>
            <div><img src={Ad12} /></div>
            <div><img src={Ad11} /></div>
          </Carousel>
        </div>
        <div className="home-nav">
          <div className="szx-wrapper">
            <div className="container-fluid">
              <Row>
                <Col span={4}>
                  <a data-toggle="tab" href="#dataMall" className="col-md-2 col-xs-2">
                    <span className="s-nav nav1"></span><br/>
                    数据超市
                  </a>
                </Col>
                <Col span={4}>
                <a data-toggle="tab" href="#marketData" className="col-md-2 col-xs-2">
                  <span className="s-nav nav2"></span><br/>
                  行情中心
                </a>
                </Col>
                <Col span={4}>
                <a data-toggle="tab" href="#dataBrowse" className="col-md-2 col-xs-2">
                  <span className="s-nav nav3"></span><br/>
                  数据搜索
                </a>
                </Col>
                <Col span={4}>
                  <a data-toggle="tab" href="#thematicStatistics" className="col-md-2 col-xs-2">
                    <span className="s-nav nav4"></span><br/>
                    专题统计
                  </a>
                </Col>
                <Col span={4}>
                  <a data-toggle="tab" href="#company" className="col-md-2 col-xs-2">
                    <span className="s-nav nav5"></span><br/>
                    公司快照
                  </a>
                </Col>
                <Col span={4}>
                  <a data-toggle="tab" href="#notice" className="col-md-2 col-xs-2">
                    <span className="s-nav nav6"></span><br/>
                    公告定制
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className="szx-wrapper">
          <div className="home-item">
            <h3>
              <ul>
                <li className="active" href="#/notice">智能摘要</li>
              </ul>
              <a href="javascript: void(0);" className="jump">更多></a>
            </h3>
            <div id="notice" className="home-item-content">
              <table className="table" >
                <thead>
                  <tr>
                    <th width="160px">证券代码</th>
                    <th width="160px">证券简称</th>
                    <th width="200px">公告类别</th>
                    <th >公告标题</th>
                    <th width="160px">发布时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="noData"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="modal fade" id="showDetail" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content" style={{padding: '10px 30px', color: '#888'}}>
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" style={{textAlign: 'center'}}>摘要详情</h4>
                </div>
                <div className="modal-body" style={{fontSize: '14px', lineHeight: '26px', maxHeight: '400px', overflowY: 'auto'}}>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="home-item">
            <h3>
              <ul>
                <li className="active" targetid="rise" href="#/thematicStatistics?id=894">业绩预告大幅上升</li>
                <li targetid="decline" href="#/thematicStatistics?id=893">业绩预告大幅下降</li>
              </ul>
              <a href="javascript: void(0);" className="jump">更多></a>
            </h3>
            <div className="home-item-content" id="rise">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                <thead>
                  <tr>
                    <th width="200px;">公告日期</th>
                    <th width="200px;">证券代码</th>
                    <th width="200px;">证券简称</th>
                    <th width="200px;">报告年度</th>
                    <th className="tr">净利润增减幅上限（%）</th>
                    <th className="tr">净利润增减幅下限（%）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="home-item-content szx-hidden" id="decline">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                <thead>
                  <tr>
                    <th width="200px;">公告日期</th>
                    <th width="200px;">证券代码</th>
                    <th width="200px;">证券简称</th>
                    <th width="200px;">报告年度</th>
                    <th className="tr">净利润增减幅上限（%）</th>
                    <th className="tr">净利润增减幅下限（%）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="home-item">
            <h3>
              <ul>
                
                <li targetid="investment" className="active" href="#/thematicStatistics?id=1062">投资评级</li>
                <li targetid="industry" href="#/thematicStatistics?id=1053">行业市盈率</li>
              </ul>
              <a href="javascript: void(0);" className="jump">更多></a>
            </h3>
            <div className="home-item-content" id="investment">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                <thead>
                  <tr>
                    <th width="160px;">证券代码</th>
                    <th width="160px;">证券简称</th>
                    <th width="160px;">研究机构简称</th>
                    <th>研究员名称</th>
                    <th width="160px;">是否首次评级</th>
                    <th width="160px;">前一次投资评级</th>
                    <th width="100px;">投资评级</th>
                    <th width="100px;">评级变化</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="10"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="home-item-content szx-hidden" id="industry">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                <thead>
                  <tr>
                    <th width="400px">证监会一级行业名称</th>
                    <th  width="200px" className="tr">公司数量</th>
                    <th  width="200px" className="tr">纳入计算公司数量</th>
                    <th  width="200px" className="tr">总市值（亿元）</th>
                    <th className="tr">加权平均静态市盈率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="home-item">
            <h3>
              <ul>
                
                <li className="active" targetid="add" href="#/thematicStatistics?id=884">股东增持</li>
                <li targetid="reduce" href="#/thematicStatistics?id=883">股东减持</li>
              </ul>
              <a href="javascript: void(0);" className="jump">更多></a>
            </h3>
            <div id="add" className="home-item-content">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                  <thead>
                    <tr>
                      <th width="160px">证券代码</th>
                      <th width="160px">证券简称</th>
                      <th width="160px">增持日期</th>
                      <th>股东名称</th>
                      <th width="140px" className="tr">增持数量（股）</th>
                      <th width="160px" className="tr">增持比例（%）</th>
                      <th width="140px" className="tr">增持价格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7"></td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div id="reduce" className="szx-hidden home-item-content">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                  <thead>
                    <tr>
                      <th width="160px">证券代码</th>
                      <th width="160px">证券简称</th>
                      <th width="160px">减持日期</th>
                      <th>股东名称</th>
                      <th width="140px" className="tr">减持数量(股)</th>
                      <th width="140px" className="tr">减持比例(%)</th>
                      <th width="140px" className="tr">减持价格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     <td colSpan="7"></td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="home-item">
            <h3>
              <ul>
                
                <li className="active" targetid="finance" href="#/thematicStatistics?id=881">融资融券</li>
                <li targetid="trade" href="#/thematicStatistics?id=880">大宗交易</li>
              </ul>
              <a href="javascript: void(0);" className="jump">更多></a>
            </h3>

            <div id="finance" className="home-item-content">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                <thead>
                  <tr>
                    <th width="80px">证券代码</th>
                    <th width="80px">证券简称</th>
                    <th width="160px" className="tr">本日融资余额（万元）</th>
                    <th width="180px" className="tr">本日融资买入额（万元）</th>
                    <th width="180px" className="tr">本日融资余量（万股）</th>
                    <th width="180px" className="tr">本日融券卖出量（万股）</th>
                    <th width="160px" className="tr">融券余量金额（万元）</th>
                    <th width="160px" className="tr">融资融券余额（万元）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="8"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="szx-hidden home-item-content" id="trade">
              <p className="szx-date"></p>
              <table className="table szx-home-table">
                  <thead>
                    <tr>
                      <th width="160px">证券代码</th>
                      <th width="160px">证券简称</th>
                      <th width="300px">买方营业部</th>
                      <th>卖方营业部</th>
                      <th width="200px" className="tr">成交价格(元)</th>
                      <th width="200px" className="tr">成交量(万股)</th>
                      <th width="200px" className="tr">成交金额(万元)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7"></td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="home-item">
            <h3>
              <ul>
                
                <li className="active" targetid="qd" href="#/thematicStatistics?id=1054">LOF基金净值增长率</li>
                <li targetid="etf" href="#/thematicStatistics?id=1054">ETF基金净值增长率</li>
              </ul>
              <a href="javascript: void(0);" className="jump">更多></a>
            </h3>
            <div className="home-item-content" id="qd">
              <table className="table szx-home-table">
                <thead>
                  <tr>
                    <th width="200px">基金代码</th>
                    <th width="200px">基金简称</th>
                    <th width="200px">净值日期</th>
                    <th className="tr" width="140px">单位净值(元)</th>
                    <th className="tr">累计净值(元)</th>
                    <th className="tr">日增长率(%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="home-item-content szx-hidden" id="etf">
              <table className="table szx-home-table">
                <thead>
                  <tr>
                    <th width="200px">基金代码</th>
                    <th width="200px">基金简称</th>
                    <th width="200px">净值日期</th>
                    <th className="tr" width="140px">单位净值(元)</th>
                    <th className="tr">累计净值(元)</th>
                    <th className="tr">日增长率(%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="home-ads">
          <h2>我们的优势</h2>
          <div>
            <p>
              <img src={Ad5} className="img-responsive" />
            </p>
            <p>
              <img src={Ad2} className="img-responsive" />
            </p>
            <p>
              <img src={Ad3} className="img-responsive" />
            </p>
            <p>
              <img src={Ad4} className="img-responsive" />
            </p>
            <p>
              <a href="#business" className="h-technology"></a>
              <a href="#technology" className="h-business"></a>
              <img src={Ad1} className="img-responsive" />
            </p>
          </div>
          <h2>合作伙伴</h2>
          <div className="link">
            <a href="http://www.szse.cn" target="blank" className="link1"></a>
            <a href="http://www.sse.com.cn" target="blank" className="link2"></a>
            <a href="http://www.cninfo.com.cn" target="blank" className="link3"></a>
            <a href="http://data.stcn.com" target="blank" className="link4"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
