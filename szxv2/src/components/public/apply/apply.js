import React, { Component } from 'react';

class Home extends Component {

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
        申请开户
      </div>
    );
  }
}

export default Home;
