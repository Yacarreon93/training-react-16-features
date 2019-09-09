import React, { Component } from 'react';
import './App.css';

// https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
// https://reactjs.org/docs/react-api.html#reactforwardref

// CLICKING THE BUTTON NOW WORKS!

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // Assign the custom prop "forwardedRef" as a ref.
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the WrappedComponent.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
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
