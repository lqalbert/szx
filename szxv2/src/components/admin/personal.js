import React, { Component } from 'react';

class Personal extends Component {

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
        个人中心
      </div>
    );
  }
}

export default Personal;
