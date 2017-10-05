import React, {Component} from 'react';
import Nav from './Nav/Nav.js';

class Bin extends Component {
  constructor() {
    super();

    this.state = {
      bin: null
    }
  }
  render() {
    return (
      <div>
        <Nav url={this.props.match.url}/>
        <p>This is Bin</p>
      </div>
    );
  }
}

export default Bin;
