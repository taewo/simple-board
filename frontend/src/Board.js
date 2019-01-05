import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from 'react-router-dom'


class Board extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(this.props.datas)
  }
  
  render() {
    const boardStyle = {
      border: '1px solid black'
    }
    return (
      <div>
        <div>Board</div>
        <Link to="/Post">++</Link>
        {this.props.datas.map(
          data => (
            <div key={data.id} style={boardStyle}>
              <div>제목 : {data.title}</div>
              <div>내용 : {data.text}</div>
              <div>작성자 : {data.writer}</div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Board;
