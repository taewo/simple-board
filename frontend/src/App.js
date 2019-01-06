import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";

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

  componentDidMount() {
    console.log(1, this.state.datas)
  }

  handleSubmit = (param) => {
    console.log("handleSubmit", param)
    const { datas } = this.state
    this.setState({
      datas: datas.concat({
        ...datas,
        param
      })
    })
  }

  render() {
    const Root = () => (
      <div>
        Home<br/>
      <div>
        <Link to="/board" params={{ data: "123"}}>게시판</Link>
      </div>
        <div><Link to="/post">글작성</Link></div>
        {/* <div>
          <Route
            path="/board"
            render={props => <Board datas={this.state.datas} />}
          />
        </div> */}
      </div>
    )

    const that = this;
    console.log('that...', that)
    return (
      <div>
        <Root />
        <Router>
          <div>
            {/* <Route
              path="/board"
              // render={() => (<Board datas={this.state.datas}  />)}
              component={Board}
              datas="123"
              that={this}
            /> */}
            <Route
              path="/board"
              render={(props) => <Board that={that} datas="hi" {...props}/>}
            />

            {/* <Route
              path="/board"
              render={props => <Board someProp={this.state.datas} {...props} />}
            /> */}
            <Route path="/post" component={Post} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
