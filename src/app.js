import React, { Component } from 'react';
import Router from './routers';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Hello World!</p>
        <Router />
      </div>
    );
  }
}