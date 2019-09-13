import React, { Component } from 'react';
import './App.css';

const generateRandomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

class Chat extends Component {
  wrapperRef = React.createRef();

  componentDidMount() {
    // Makes the Chat scrolls down after is mounted.
    this.wrapperRef.current.scrollTop = this.wrapperRef.current.scrollHeight;
  }

  render() {
    return (
      <div
        ref={this.wrapperRef}
        children={this.props.children}
        style={{
          width: 300,
          height: 300,
          background: 'red',
          overflowY: 'scroll',
          border: '1px solid #ccc',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  state = {
    messages: Array(10).fill().map(generateRandomString),
  };

  addMessage = () => {
    this.setState(state => ({
      messages: state.messages.concat([generateRandomString()]),
    }));
  };

  render () {
    return (
      <div className="App">
        <Chat>
          {this.state.messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'inline-block',
                padding: 8,
                margin: 2,
                background: 'blue',
                borderRadius: '1rem',
              }}
            >
              {message}
            </div>
          ))}
        </Chat>
        {/*
          When clicking the button a new message gets into the Chat but it's hidden
          because of the overflow, you need to scroll down the Chat to see it.
        */}
        <button onClick={this.addMessage}>Add</button>
      </div>
    );
  }
}

export default App;
