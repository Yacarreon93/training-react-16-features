import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Overlay extends Component {
  constructor(props) {
    super(props);

    /*
      It creates its own container in the DOM.
    */
    this.overlayContainer = document.createElement('div');

    document.body.appendChild(this.overlayContainer);
  }

  /*
    The container is removed when the component is unmounted.
  */
  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        {this.props.children}        
        <span onClick={this.props.onClose}>X</span> {/* Click here to close overlay */}
      </div>,
      this.overlayContainer,
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { overlayActive: true };
  }

  closeOverlay = () => {
    this.setState({ overlayActive: false });
  };

  render() {

    return (
      <div className="App">
        <h1>My app</h1>
        {/*
          Portals provide a first-class way to render children into a DOM
          node that exists outside the DOM hierarchy of the parent component.
  
          Doc: https://reactjs.org/docs/portals.html
  
          Don't forget to include the container into "index.html".
        */}
        {this.state.overlayActive && (
          <Overlay onClose={this.closeOverlay}>
            <span>Welcome</span>
          </Overlay>
        )}
      </div>
    );
  }
}

export default App;
