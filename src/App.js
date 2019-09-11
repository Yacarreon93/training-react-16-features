import React, { Component, Fragment } from 'react';
import './App.css';

// Se doc: https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

class FetchJSON extends Component {
  state = {
    url: null,
    data: null,
    isLoading: true,
  };

  /*
    getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount
    and on subsequent updates. It should return an object to update the state, or null to update nothing.

    This method exists for rare use cases where the state depends on changes in props over time.
    
    Deriving state leads to verbose code and makes your components difficult to think about.
    Make sure you’re familiar with simpler alternatives:
    https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    */
   static getDerivedStateFromProps(props, state) {
     console.log('getDerivedStateFromProps', props);
     
     if (state.url !== props.url) {
      return {
        url: props.url,
        data: null,
        isLoading: true,
      };
    }

    return null;
  }

  fetchAndUpdate = async () => {
    const response = await fetch(this.state.url);
    const result = await response.json();

    this.setState({
      data: result,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.fetchAndUpdate();
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.fetchAndUpdate();
    }
  }

  render() {
    return <Fragment>{this.props.render(this.state)}</Fragment>
  }
}

class App extends Component {
  state = {
    person: 1,
  };

  changePerson = () => this.setState({ person: 2 });
  
  render() {
    return (
      <div className="App">
        <FetchJSON
          url={`https://swapi.co/api/people/${this.state.person}`}
          render={({ isLoading, data }) => (
            <div>{isLoading ? 'Loading...': `Name: ${data.name}`}</div>
          )}
        />
        <button onClick={this.changePerson}>Change Person</button>
      </div>
    );
  }
}

export default App;
