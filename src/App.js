import React, { Component } from 'react';
import './App.css';

// https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
// https://reactjs.org/docs/react-api.html#reactforwardref

// NOTE: THIS CODE WILL THROW ERRORS WHEN CLICKING THE BUTTON!

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      /*
        Refs will not get passed through. That’s because ref is not a prop.
        Like key, it’s handled differently by React.
      */
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

class TextInput extends Component {
  inputRef = React.createRef();

  focus = () => this.inputRef.current.focus();

  render() {
    return <input ref={this.inputRef} />;
  }
};

const HOCedTextInput = logProps(TextInput);

/*
  ForwardedTextInput uses React.forwardRef() to obtain the ref passed to it,
  and then forward it to the DOM button that it renders.
*/
// const ForwardedTextInput = React.forwardRef(TextInput);

class App extends Component {
  inputRef = React.createRef();

  focusInput = () => this.inputRef.current.focus();

  render () {
    return (
      <div className="App">
        {/* 
          The TextInput component is wrapped by the LogProps HOC.
          Even though the rendered output will be the same, our ref
          will point to LogProps instead of the inner TextInput component!
          This means we can't call e.g. ref.current.focus().
        */}
        <HOCedTextInput ref={this.inputRef} />
        <button onClick={this.focusInput}>
          Focus
        </button>
      </div>
    );
  }
}

export default App;
