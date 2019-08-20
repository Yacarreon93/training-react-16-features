import React from 'react';
import './App.css';

const Comment = ({ text }) => {
  const emojied = text.replace(':)', ':smile:');

  return (
    <span>
      {emojied}
    </span>
  );
}

function App() {
  return (
    <div className="App">
      <Comment text="This is a smiling face > :)" />
    </div>
  );
}

export default App;
