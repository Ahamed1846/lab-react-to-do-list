import React, { Component } from 'react';
import '../component/Editor.css';


class Editor extends Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);

        this.state={
            value: ''
        }
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
  render() {
    return (
      <div className="container">
        <div className='input'>
            <h4>Input</h4>
            <textarea className="input-text" onChange={this.handleChange}/>
        </div>
        <div className="output">
            <h4>Pro Note</h4>
            <div className="output-text">{this.state.value}</div>
        </div> 
      </div>
    );
  }
}

export default Editor;
