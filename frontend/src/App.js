import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';

import './App.css';

import Hamin from './Hamin'
import Board from './Board'
import Editor from './Editor'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <Editor />

      </div>
    );
  }
}

export default App;
