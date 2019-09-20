import React, { Component } from 'react';
import './App.css';

const Button = (props) => {
  const style =
    props.theme === 'dark'
      ? { background: '#666', color: '#fff' }
      : { background: '#eee ', color: '#222' };
  
  return <button style={style}>{props.children}</button>;
};

const Toolbar = props => (
  <div>
    <Button theme={props.theme}>Edit</Button>
    <Button theme={props.theme}>Save</Button>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar theme="dark" />
      </div>
    );
  }
}

export default App;
