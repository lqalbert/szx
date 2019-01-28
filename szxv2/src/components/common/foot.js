import React, { Component } from 'react';

class Foot extends Component {

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
        <h1>this is foot</h1>
      </div>
    );
  }
}

export default Foot;
