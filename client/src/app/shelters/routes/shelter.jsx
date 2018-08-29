import React, { Component } from 'react';
import Account from './Account';
import Nav from '../navbar/index';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { view } = this.state;
    return (
      <div>
        <Nav />
        <Account />
      </div>
    );
  }
}
