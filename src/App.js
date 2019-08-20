import React from 'react';
import './App.css';

/*
  Render multiple elements without a wrapping element.
*/
const Stuff = () => [
  <li key="1">Truck</li>,
  <li key="2">Tomatoe</li>,
  <li key="3">Sugar</li>,
];

function App() {
  return (
    <div className="App">
      <ul>
        <li>Car</li>
        <li>Hammer</li>
        <li>Flower</li>
        <Stuff />
      </ul>
    </div>
  );
}

export default App;
