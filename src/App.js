import React, { Component } from 'react';
import './App.css';

// See doc: https://reactjs.org/docs/refs-and-the-dom.html

const MyFunctionComponent = () => <input type="text" />;

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
  }
  
  componentDidMount() {
    console.log('inputRef', this.inputRef.current); // Warning will be thrown: Function components cannot be given refs.
  }

  render() {
    return (
      <div className="App">
        {/* WARNING! Don't Ref a Function Component */}
        <MyFunctionComponent ref={this.inputRef} />
      </div>
    );
  }
}

export default App;
