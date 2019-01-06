import React, { Component } from 'react';
import {Route, withRouter, BrowserRouter} from 'react-router-dom';

class Post extends Component {
  inputChange = () => {
    console.log(11, this.props.history)
    var title = document.getElementById("title").value
    var text = document.getElementById("text").value
    var writer = document.getElementById("writer").value

    let result = {
      title,
      text,
      writer
    }

    this.props.history.push("/board")
  }

  render() {
    return (
      <div>
        <div>글작성</div>
        타이틀 : <input id="title" type="text" name="title" /><br/>
        내용 : <input id="text" type="text" name="text"/><br/>
        작성자 : <input id="writer" type="text" name="writer"/><br/>
        <input type="button" value="제출" onClick={this.inputChange} />
      </div>
    );
  }
}

export default Post;
