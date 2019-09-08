import React, { Component } from 'react';
import './App.css';

// See doc: https://reactjs.org/docs/react-component.html#setstate

/*
  Both state and props received by the updater function are guaranteed to be up-to-date.
  The output of the updater is shallowly merged with state.
  It's possible to not update the state once setState() is called, returning "null" will make
  the state no change, you can see there is no more "it renders" when the counter reachs 5.
*/
const updater = (state, props) => {
  if (state.counter >= 5) {
    return null;
  }

  return { counter: state.counter + 1 };
}

class App extends Component {
  state = {
    counter: 0,
  };

  sumOne = () => this.setState(updater);

  render() {
    console.log('it renders');

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.sumOne}
        >
          +
        </button>
        {this.state.counter}
      </div>
    );
  }
}

export default App;
