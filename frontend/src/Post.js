import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  inputChange = () => {
    var title = document.getElementById("title").value
    var text = document.getElementById("text").value
    var writer = document.getElementById("writer").value

    let result = {
      title,
      text,
      writer
    }
    console.log(title, text, writer)
    this.props.handleSubmit(result)

    document.getElementById("title").value = ""
    document.getElementById("text").value = ""
    document.getElementById("writer").value = ""

  }

  render() {
    return (
      <div>
        <div>Post</div>
        타이틀 : <input id="title" type="text" name="title" /><br/>
        내용 : <input id="text" type="text" name="text"/><br/>
        작성자 : <input id="writer" type="text" name="writer"/><br/>
        <input type="button" value="제출" onClick={this.inputChange} />
      </div>
    );
  }
}

export default Post;
