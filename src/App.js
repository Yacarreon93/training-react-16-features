import React, { Component } from 'react';
import './App.css';

// See doc: https://reactjs.org/docs/refs-and-the-dom.html

class CustomTextInput extends React.Component {
  inputRef = React.createRef();

  focusTextInput = () => {
    console.log('focusing');
    this.inputRef.current.focus();
  };

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}

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
    console.log('componentDidMount', this.inputRef.current); // Once the component did mount the Ref is now accessible.
    this.inputRef.current.focusTextInput();
  }

  render() {
    return (
      <div className="App">
        {/* It's also possible to add a Ref to a Class Component */}
        <CustomTextInput ref={this.inputRef} />
      </div>
    );
  }
}

export default App;
