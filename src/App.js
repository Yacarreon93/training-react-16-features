import React, { Component } from 'react';
import './App.css';

const generateRandomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

class Chat extends Component {
  wrapperRef = React.createRef();

  componentDidMount() {
    // Makes the Chat scrolls down after is mounted.
    this.wrapperRef.current.scrollTop = this.wrapperRef.current.scrollHeight;
  }

  
  isScrollAtTheBottom = wrapper => wrapper.scrollTop + wrapper.offsetHeight >= wrapper.scrollHeight;

  /*
    getSnapshotBeforeUpdate() is invoked right before the most recently rendered output
    is committed to e.g. the DOM. It enables your component to capture some information
    from the DOM (e.g. scroll position) before it is potentially changed. Any value
    returned by this lifecycle will be passed as a parameter to componentDidUpdate().
  */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const wrapper = this.wrapperRef.current;

    // Send to "componentDidUpdate" if should scroll down.
    return this.isScrollAtTheBottom(wrapper);
  }

  /*
    It is important to read the "scrollHeight" (see: isScrollAtTheBottom()) property in
    getSnapshotBeforeUpdate() because there may be delays between “render” phase lifecycles
    (like render) and “commit” phase lifecycles (like getSnapshotBeforeUpdate and componentDidUpdate).
  */

  componentDidUpdate(prevProps, prevState, snapshot) {
    // In the case of the snapshot is sent, then scroll down.
    if (snapshot) {
      this.wrapperRef.current.scrollTop = this.wrapperRef.current.scrollHeight;
    }
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
