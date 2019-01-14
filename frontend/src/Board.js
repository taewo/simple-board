import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(1, this.props.datas)
    return (
      <div>
        게시판
      </div>
    );
  }
}

export default Board;
