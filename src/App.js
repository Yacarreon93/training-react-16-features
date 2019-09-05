import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    fruit: 'apple',
    loading: false,
  };

  handleFruitChange = evt => {
    evt.persist();

    const fruit = evt.currentTarget.value;

    this.setState({ loading: true }, () => {
      setTimeout(() => this.setState({
        fruit,
        loading: false,
      }), 1000);
    })
  }

  renderFruit = () => this.state.loading ? 'loading' : this.state.fruit;

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
