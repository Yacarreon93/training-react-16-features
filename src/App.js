import React from 'react';
import './App.css';

/*
  Doc: https://es.reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html

  In the past React used to ignore unknown DOM attributes. If you wrote JSX with
  an attribute that React doesn’t recognize, React would just skip it.
*/

function App() {
  return (
    <div
      // Open the browser inspector to see the attrs.
      my-attribute-1="foo"
      my-attribute-2="var"
      /*
        Note that you should still use the canonical
        React naming for known attributes.
      */
      tabIndex="-1"
      onClick={() => console.log('clicked')}
    >
      Hello wordl!
    </div>
  );
}

export default App;
