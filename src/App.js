import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {length: 0, text: "", textArray: []}
  }

  changeTextHandler = (event) => {
    const value = event.target.value;
    let textArray = this.state.textArray.slice();
    textArray.push(value[value.length-1])
    this.setState({length: value.length, text: value, textArray: textArray});
    console.log(this.state);
  }

  charComponentClickHandler = (letterId) => {
    let textArray = this.state.textArray.slice();
    textArray.splice(letterId, 1)
    this.setState({textArray: textArray});
  }

  render() {
    return (
      <div className="App">
        <h1>List conditionals</h1>
        <div>
          <label>Enter a text:</label>
          <input type="text" id="text" placeholder="Text" onChange={this.changeTextHandler}/>
          <p>Length of text: {this.state.length}</p>
          <ValidationComponent textLength={this.state.length} />
          {this.state.textArray.map((letter, idx) => {
            return <CharComponent letter={letter} key={idx} clicked={() => this.charComponentClickHandler(idx)}/>  
          })}
        </div>
        <ol>
          <li>*Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>*Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>*Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>*Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>*Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
