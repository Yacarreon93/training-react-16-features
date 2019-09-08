import React, { Component } from 'react';
import './App.css';

// See doc: https://reactjs.org/docs/refs-and-the-dom.html

class App extends Component {
  constructor(props) {
    super(props);

    /*
      Refs provide a way to access DOM nodes or React elements created in the render method.
    */
    this.inputRef = React.createRef();
    console.log('constructor', this.inputRef.current); // Ref is not accessible at this point.
  }
  
  componentDidMount() {
    console.log('componentDidMount', this.inputRef.current); // Once the component did mount the ref is now accessible.
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="App">
        {/* Ref attached to React elements via the ref attribute */}
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default App;
