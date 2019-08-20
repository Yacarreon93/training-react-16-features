import React from 'react';
import './App.css';

const Comment = ({ text }) => {
  const emojied = text.replace(':)', ':smile:');

  /*
    Components can return a simply string.
    See the DOM and check there is no extra wrapping element around text.
  */
  return emojied;
}

function App() {
  return (
    <div className="App">
      <Comment text="This is a smiling face > :)" />
    </div>
  );
}

export default App;
