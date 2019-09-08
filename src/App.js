import React from 'react';
import './App.css';

const Fruits = () => [
  <li key="1">Apple</li>,
  <li key="2">Orange</li>,
  <li key="3">Watermelon</li>,
];

function App() {
  return (
    <div className="App">
      <ul>
        <li>Peach</li>
        <li>Banana</li>
        <Fruits />
      </ul>
    </div>
  );
}

export default App;
