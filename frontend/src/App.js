import React, { Component } from 'react';

import './App.css';

import Board from './Board'
import Post from './Post'
import Route_test from './Route_test'


class App extends Component {
  id = 1;
  state = {
    datas: [
      {
        title: "title",
        text: "text",
        writer: "writer",
        id: 0
      }, {
        title: "title2",
        text: "text2",
        writer: "writer2",
        id: 1
      }
    ]
  }

  handleLog = (param) => {
    console.log('param', param)
  }

  render() {
    return (
      <React.Fragment>
        <Board datas={this.state.datas}  />
        <Post />
      </React.Fragment>
    );
  }
}

export default App;
