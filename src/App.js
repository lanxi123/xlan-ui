import './App.css';
import React, { Component } from 'react'
import Login from './viwes/login/login'
export default class App extends Component {
  constructor() {
    super()
  }
  aca() {
    console.log(111);
  }
  render() {
    return (
      <div id="add">
        <Login></Login>
      </div>
    )
  }
}


