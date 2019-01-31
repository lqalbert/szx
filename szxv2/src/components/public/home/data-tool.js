import React from 'react'
import { Icon } from 'antd';

import gskz from '../../../assets/images/gskz.png';
import gswj from '../../../assets/images/gswj.png';
import hangq from '../../../assets/images/hangq.png';
import sjss from '../../../assets/images/sjss.png';
import zttj from '../../../assets/images/zttj.png';
export default class DataTool extends React.Component {

  render () {
    return (
      <div className="tool">
        <div className="tool-wrap">
          <div className="tool-nav">
            <div className="pic"><img src={hangq} alt="行情中心"/></div>
            <div className="hangq"><span>行情中心</span><Icon type="arrow-right" className="arrow"/></div>
            <div className="introduce">
              提供国内外多层次资本市场以及境外主要股票市场收盘行情数据浏览与下载服务。
            </div>
          </div>
          <div className="tool-nav">
            <div className="pic"><img src={sjss} alt="数据搜索"/></div>
            <div className="hangq"><span>数据搜索</span><Icon type="arrow-right" className="arrow"/></div>
            <div className="introduce">
              多指标、多条件查询，自定义报表，将数据搜索与API应用结合，实现基于API可视化服务
            </div>
          </div>
          <div className="tool-nav">
            <div className="pic"><img src={zttj} alt="专题统计"/></div>
            <div className="hangq"><span>专题统计</span><Icon type="arrow-right" className="arrow"/></div>
            <div className="introduce">
              提供不同维度、不同主题的系列报表，展示资本市场信息，查询结果一键下载，简洁明了。
            </div>
          </div>
          <div className="tool-nav">
            <div className="pic"><img src={gskz} alt="公司快照"/></div>
            <div className="hangq"><span>公司快照</span><Icon type="arrow-right" className="arrow"/></div>
            <div className="introduce">
              上市公司基础数据展示与下载，涵盖公司概况、历史行情、主要指标、财务报表、历史分红、主要股东等信息。
            </div>
          </div>
          <div className="tool-nav">
            <div className="pic"><img src={gswj} alt="公司挖掘"/></div>
            <div className="hangq"><span>公司挖掘</span><Icon type="arrow-right" className="arrow"/></div>
            <div className="introduce">
              整合行业数据,开放标准格式数据接口，多种数据获取格式。提供数据试用、预览、代码样例，助力广大投资者发掘数据价值。
            </div>
          </div>
        </div>
      </div>
    )
  }
}