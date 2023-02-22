import React, { Component } from "react";
import './App.css'

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleAdd = () => {
    let Input = document.getElementById("input");
    let Output = document.getElementById("output");

    if (Input.value.length !== 0) {
      Output.innerHTML +=
        `<div>
          <input type="text" placeholder="Type here" value="${Input.value}"/>
          <input type="button" value="Del item" onClick={this.handleDel}>
        </div>`;
    } else {
      Output.innerHTML += "";
    }

    Input.value = "";
    this.setState({ value: "" });
  }

  handleDel = (e) => {
    console.log("test");
    e.target.parentNode.remove();
  }

  render() {
    return (
      <div>
        <div>
          <input id="input" type="text" placeholder="Type here"/>
          <input type="button" value="Add item" onClick={this.handleAdd} />
        </div>
        <br />
        <div id="output"></div>
      </div>
    );
  }
}

export default Notes;
