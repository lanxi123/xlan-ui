import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
  }
  aca() {
    console.log(111);
  }
  render() {
    return (
      <div>
          <Button type="primary" onClick={this.aca}>Primary Button</Button>
      </div>
    )
  }
}


