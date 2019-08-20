import React, { Component } from 'react';
import './App.css';

/*
  IN CASE OF STILL SEEING THE ERROR IN BROWSER:

  "The 'create-react-app' package has a tool called the 'react-overlay-error'.
  This shows error messages from the console as an overlay over your app so you can easily check the stack trace and debug.
  This won't show up in production mode, it's just a development tool duplicating the normal browser console.
  You can hide this by pressing Escape to see your overlay again."

  Ref: https://stackoverflow.com/questions/52096804/react-still-showing-errors-after-catching-with-errorboundary
*/

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  /*
    Doc: https://es.reactjs.org/docs/react-component.html#componentdidcatch
  */
  componentDidCatch(error, info) {
    console.log('componentDidCatch >', error, info);
    this.setState({ hasError: true });

    // logComponentStacskToMyService(info.componentStack);
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);

    // Errors thrown here are catchable:
    // throw new Error('error from constructor');
  }

  componentDidMount() {
    // Errors thrown here are catchable:
    // throw new Error('error from componentDidMount');
  }

  handleClick = () => this.setState((state) => {
    // Errors thrown here are catchable:
    // throw new Error('error from setState');

    return { ...state };
  });

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.user.name}
      </div>
    );
  }
};

class App extends Component {
  state = {
    user: { name: 'Arturo' },
    hasError: false,
  };

  /*
    Click on button to cause an error,
  */
  updateUser = () => this.setState({ user: null });

  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <header className="App-header">
            <Profile user={this.state.user} />
            <button onClick={this.updateUser}>Update</button>
          </header>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
