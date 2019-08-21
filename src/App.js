import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My app</h1>
      {/*
        Portals provide a first-class way to render children into a DOM
        node that exists outside the DOM hierarchy of the parent component.

        Doc: https://reactjs.org/docs/portals.html

        Don't forget to include the container into "index.html".
      */}
      {ReactDOM.createPortal(
        <div>Welcome</div>,
        document.getElementById('portal-container'),
      )}
    </div>
  );
}

export default App;
