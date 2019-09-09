import React, { Component } from 'react';
import './App.css';

// https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
// https://reactjs.org/docs/react-api.html#reactforwardref

const TextInput = (props, ref) => <input ref={ref} />;

/*
  ForwardedTextInput uses React.forwardRef() to obtain the ref passed to it,
  and then forward it to the DOM button that it renders.
*/
const ForwardedTextInput = React.forwardRef(TextInput);

class App extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render () {
    return (
      <div className="App">
        <ForwardedTextInput ref={this.inputRef} />
      </div>
    );
  }
}

export default App;
