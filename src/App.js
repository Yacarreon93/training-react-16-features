import React from 'react';
import './App.css';

/*
  It's possible to use Fragment to wrap elements and return them like an array.
  Element keys are not required this way.
  
  TIP:
  React recognizes "<></>" as Fragment.
  You can use "<></>" the same way you’d use any other element except that it doesn’t support keys or attributes.
*/
const Fruits = () => (
  <>
    <li>Apple</li>
    <li>Orange</li>
    <li>Watermelon</li>
  </>
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
