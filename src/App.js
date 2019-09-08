import React, { Fragment } from 'react';
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

/*
  Fragments declared with the explicit syntax may have keys.
  A use case for this is mapping a collection to an array of fragments.
  "key" is the only attribute that can be passed to Fragment.
*/
const Glossary = props => (
  <dl>
    {props.items.map(item => (
      <Fragment key={item.id}>
        <dt>{item.term}</dt>
        <dd>{item.description}</dd>
      </Fragment>
    ))}
  </dl>
);

function App() {
  return (
    <div className="App">
      <ul>
        <li>Peach</li>
        <li>Banana</li>
        <Glossary items={[
          { id: 1, term: 'Google', description: 'This is the description of Google.'},
          { id: 1, term: 'Windows', description: 'This is the description of Windows.' },
        ]} />
      </ul>
    </div>
  );
}

export default App;
