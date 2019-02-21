import React, { Component } from 'react';
import { Icon } from 'antd';

class Rmd extends Component {

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
        <div>
          <div className="product">
            <div>
              <span className="name">股票日行情包</span>
              <div className="right">
                <Icon type="like" theme="twoTone" className="like"/>
                <span className="num">888</span>
                <Icon type="star" theme="twoTone" className="star"/>
                <span className="keep">收藏</span>
              </div>
            </div>
            <div>
              <Icon type="clock-circle" className="clock"/>
              <span>上架时间：2019-01-20</span>
              <Icon type="sync" className="sync"/>
              <span>更新频率：日</span>
            </div>
            <div>
              深圳市场股票日行情，日开盘价，收盘价，最高价，最低价。
            </div>
            <div className="property">
              <span className="regular">普通用户</span>
              <span className="free">免费</span>
              <span className="other">其他属性</span>
            </div>
          </div>
          <div className="product">
            <div>
              <span className="name">股票日行情包</span>
              <div className="right">
                <Icon type="like" theme="twoTone" className="like"/>
                <span className="num">888</span>
                <Icon type="star" theme="twoTone" className="star"/>
                <span className="keep">收藏</span>
              </div>
            </div>
            <div>
              <Icon type="clock-circle" className="clock"/>
              <span>上架时间：2019-01-20</span>
              <Icon type="sync" className="sync"/>
              <span>更新频率：日</span>
            </div>
            <div>
              深圳市场股票日行情，日开盘价，收盘价，最高价，最低价。
            </div>
            <div className="property">
              <span className="regular">普通用户</span>
              <span className="free">免费</span>
              <span className="other">其他属性</span>
            </div>
          </div>
          <div className="product">
            <div>
              <span className="name">股票日行情包</span>
              <div className="right">
                <Icon type="like" theme="twoTone" className="like"/>
                <span className="num">888</span>
                <Icon type="star" theme="twoTone" className="star"/>
                <span className="keep">收藏</span>
              </div>
            </div>
            <div>
              <Icon type="clock-circle" className="clock"/>
              <span>上架时间：2019-01-20</span>
              <Icon type="sync" className="sync"/>
              <span>更新频率：日</span>
            </div>
            <div>
              深圳市场股票日行情，日开盘价，收盘价，最高价，最低价。
            </div>
            <div className="property">
              <span className="regular">普通用户</span>
              <span className="free">免费</span>
              <span className="other">其他属性</span>
            </div>
          </div>
          <div className="product">
            <div>
              <span className="name">股票日行情包</span>
              <div className="right">
                <Icon type="like" theme="twoTone" className="like"/>
                <span className="num">888</span>
                <Icon type="star" theme="twoTone" className="star"/>
                <span className="keep">收藏</span>
              </div>
            </div>
            <div>
              <Icon type="clock-circle" className="clock"/>
              <span>上架时间：2019-01-20</span>
              <Icon type="sync" className="sync"/>
              <span>更新频率：日</span>
            </div>
            <div>
              深圳市场股票日行情，日开盘价，收盘价，最高价，最低价。
            </div>
            <div className="property">
              <span className="regular">普通用户</span>
              <span className="free">免费</span>
              <span className="other">其他属性</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rmd;
