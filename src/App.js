import React, { Component } from 'react';
import './App.css';

/*
  Render multiple elements without a wrapping element.
*/
const Stuff = () => [
  <li key="1">Truck</li>,
  <li key="2">Tomatoe</li>,
  <li key="3">Sugar</li>,
];

class MoreStuff extends Component {
  render () {
    /*
      The "keys" are the same as in "Stuff" but in this case they are not an issue.
      See there is no warnings in console.
    */
    return [
      <li key="1">Animals</li>,
      <li key="2">Fruits</li>,
    ];
  }
}

function App() {
  return (
    <div className="App">
      <ul>
        <li>Car</li>
        <li>Hammer</li>
        <li>Flower</li>
        <Stuff />
        <MoreStuff />
      </ul>
    </div>
  );
}

export default App;
