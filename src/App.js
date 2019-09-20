import React, { Component } from 'react';
import './App.css';

// Doc: https://reactjs.org/docs/context.html

/*
  Context provides a way to pass data through the component
  tree without having to pass props down manually at every level.
*/
const ThemeContext = React.createContext('light');

const Button = (props) => (
  <ThemeContext.Consumer>
    {(theme) => {
      const style =
        theme === 'dark'
          ? { background: '#666', color: '#fff' }
          : { background: '#eee ', color: '#222' };

      return <button style={style}>{props.children}</button>;
    }}
  </ThemeContext.Consumer>
);

class ClassButton extends Component {
  /*
    Assign a contextType to read the current theme context.
    React will find the closest theme Provider above and use its value.
    
    In this example, the context is "dark".
  */
  static contextType = ThemeContext;

  render () {
    const style =
        this.context === 'dark'
          ? { background: '#666', color: '#fff' }
          : { background: '#eee ', color: '#222' };

    return <button style={style}>{this.props.children}</button>;
  }
}

/*
  A component in the middle doesn't have to
  pass the theme down explicitly anymore.
*/
const Toolbar = () => (
  <div>
    <ClassButton>Edit</ClassButton>
    <ClassButton>Save</ClassButton>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
          Use a Provider to pass the current theme to the tree below.
          Any component can read it, no matter how deep it is.
          Toolbar doesn't have to pass the theme down explicitly anymore. 
          
          In this example, we're passing 'dark' as the current value.
        */}
        <ThemeContext.Provider value='dark'>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
