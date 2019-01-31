import React, { Component } from 'react';
import qrCode from '../../assets/images/qr-code.png'
class Foot extends Component {

  render() {
    return (
      <div className="foot">
        <div className="foot-wrap">
          <div className="announcement">
            <div className="disclaimer">免责声明</div>
            <div>本系统竭力保证所提供的证券市场信息准确可靠，</div>
            <div>但并不担保（无论是提示、默示、法定或其他形式）其准确性和完整性。</div>
            <div>任何使用方不得就全部或部分使用其中的证券市场信息作为依据并对于由此而引起的任何损失向本公司提出索赔。</div>
          </div>
          <div className="qr-code">
            <img src={qrCode} alt="二维码"/>
          </div>
        </div>
        <div className="copy-info">
          深圳证券信息有限公司版权所有 ICP证 粤B2-20050313 &nbsp;&nbsp;&nbsp;&nbsp;粤公网安备 44030402002031号
        </div>
      </div>
    );
  }
}

export default Foot;
