import React, { Component } from 'react';
import './App.css';

// See doc: https://reactjs.org/docs/react-component.html#setstate

class App extends Component {
  state = {
    fruit: 'apple',
    loading: false,
  };

  handleFruitChange = evt => {
    evt.persist();

    const fruit = evt.currentTarget.value;

    const callback = () => setTimeout(() => this.setState({
      fruit,
      loading: false,
    }), 1000);

    /*
      setState() does not always immediately update the component.
      It may batch or defer the update until later. This makes reading
      this.state right after calling setState() a potential pitfall.
      Instead, use setState callback (setState(updater, callback)),
      it is guaranteed to fire after the update has been applied.
    */
    this.setState({ loading: true }, callback);
  }

  renderFruit = () => this.state.loading ? 'loading...' : this.state.fruit;

  render() {
    return (
      <div className="App">
        <button
          type="button"
          value="apple"
          onClick={this.handleFruitChange}
        >
          Apple
        </button>
        <button
          type="button"
          value="banana"
          onClick={this.handleFruitChange}
        >
          Banana
        </button>
        {this.renderFruit()}
      </div>
    );
  }
}

export default App;
