import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from 'react-router-dom'


class Board extends Component {
  constructor(props) {
    super(props);
    console.log(5, props.datas)
    console.log(555, this.props)
  }

  componentDidMount() {
    console.log(1, this.props.datas)
    console.log(111, this.props.that)
  }

  componentWillReceiveProps(nextProps) {
    console.log(3, nextProps)
  }


  render() {
    const boardStyle = {
      border: '1px solid black'
    }
    console.log(2, this.props.datas)

    return (
      <div>
        <Link to="/">Home</Link>
      <div>게시판</div>
      <Link to="/Post">글작성</Link>
        {/* {this.props.datas.map(
          data => (
            <div key={data.id} style={boardStyle}>
              <div>제목 : {data.title}</div>
              <div>내용 : {data.text}</div>
              <div>작성자 : {data.writer}</div>
            </div>
          )
        )} */}
      </div>
    );
  }
}

export default Board;
