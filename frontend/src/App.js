import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

import Board from './Board'
import Post from './Post'


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

  handleSubmit = (param) => {
    console.log("handleSubmit", param)
  }

  render() {
    const Root = () => (
      <div>
        hello world<br/>
        <div><Link to="/board">게시판</Link></div>
        <div><Link to="/post">글작성</Link></div>
      </div>

    )
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Root} />
          <Route 
            path="/board"
            component={() => <Board datas={this.state.datas} />}
          />
          <Route
            path="/post"
            component={() => <Post handleSubmit={this.handleSubmit} />}
            
          />
        </div>
      </Router>
    );
  }
}

export default App;
