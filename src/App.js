import React from 'react';
import './App.css';

/*
  Doc: https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html

  In the past React used to ignore unknown DOM attributes. If you wrote JSX with
  an attribute that React doesn’t recognize, React would just skip it.
*/

class Foo {
  toString() {
    return 'foo';
  }
}

const foo = new Foo();

function App() {
  return (
    <div
      // Open the browser inspector to see the attributes.
      my-attribute-1="foo"
      my-attribute-2="var"
      /*
        Note that you should still use the canonical
        React naming for known attributes.
      */
      // tabIndex="-1"
      // onClick={() => console.log('clicked')}
      /*
        React 16 makes possible to do this:
        However, warnings will be thrown in console.
      */
      class="my-class"
      tabindex="-1"
      /*
        As an exception, the attributes starting with "on" are ignored
        because this could become a potential security hole (see warnings in console).
      */
      onion="true"
      ontas="true"
      onclick={() => console.log('clicked')}
      // Cases when React will NOT render the attributes:
      wrong-attribute-1={true}
      wrong-attribute-2={() => null}
      wrong-attribute-3={Symbol('foo')}
      /*
        Cases when React will render the attributes
        converting them to string using the "toString" method.
      */
     custom-attr-1={5}
     custom-attr-2={NaN}
     custom-attr-3={{ foo: 'bar' }}
     custom-attr-4={foo}
    >
      Hello wordl!
    </div>
  );
}

export default App;
