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

    WARNING: The use of getDerivedStateFromProps may cause some issues.
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

  /*
    As an example:
    Calling this method again while the first call is still fething may cause a concurrency error.
    
    HOW TO: Try to click the button as soon as the page loads (you'll see a flashing).
  */
  fetchAndUpdate = async () => {
    /*
      To fix it:

      1. Get the url from the state (it will works as the last url requested).
    */
    const { url } = this.state;
    const response = await fetch(url);
    const result = await response.json();

    this.setState((state) => {
      //  2. Update the state only in case the url is equals to the last one requested.
      if (state.url === url) {
        return {
          data: result,
          isLoading: false,
        };
      }

      return null;
     });
  }

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
