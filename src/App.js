import React, { Component } from 'react';
import './App.css';

const generateRandomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const Chat = ({ children }) => (
  <div
    style={{
      maxWidth: '300px',
      maxHeight: '100px',
      background: 'red',
      overflowY: 'scroll',
    }}
  >
    {children}
  </div>
);

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
        <button onClick={this.addMessage}>Add</button>
      </div>
    );
  }
}

export default App;
