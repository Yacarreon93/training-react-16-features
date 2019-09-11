import React, { Component, Fragment } from 'react';
import './App.css';

class FetchJSON extends Component {
  state = {
    data: null,
    isLoading: true,
  };

  fetchAndUpdate = async () => {
    const response = await fetch(this.props.url);
    const result = await response.json();

    this.setState({
      data: result,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.fetchAndUpdate();
  }

  render() {
    return <Fragment>{this.props.render(this.state)}</Fragment>
  }
}

class App extends Component {
  state = {
    person: 1,
  };
  
  render() {
    return (
      <div className="App">
        <FetchJSON
          url={`https://swapi.co/api/people/${this.state.person}`}
          render={({ isLoading, data }) => (
            <div>{isLoading ? 'Loading...': `Name: ${data.name}`}</div>
          )}
        />
      </div>
    );
  }
}

export default App;
