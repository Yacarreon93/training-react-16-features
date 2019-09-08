import React, { Fragment } from 'react';
import './App.css';

/*
  It is possible to use Fragment to wrap elements and return them like an array.
  Element keys are not required this way.
*/
const Fruits = () => (
  <Fragment>
    <li>Apple</li>
    <li>Orange</li>
    <li>Watermelon</li>
  </Fragment>
);

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
