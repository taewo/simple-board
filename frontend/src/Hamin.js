import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hamin extends Component {
    constructor(props) {
     super(props);

     this.state = {
        happy: "뉴욕야시장",
        text: ""
    };
    this.changeInputValue = this.changeInputValue.bind(this)
  }

  changeInputValue (e) {
      console.log("하민", e.target.value)
      this.setState({
          happy: e.target.value
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello 하민!
            </a><br></br>
            <p>Merry 12 <br></br>
                First name: <input type="text" name="FirstName" onChange={this.changeInputValue} value={this.state.happy}/><br></br>
            {this.state.happy}



            </p>
        </header><br></br>

      </div>
    );
  }
}

export default Hamin;
