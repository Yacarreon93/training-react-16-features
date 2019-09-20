import React, { Component } from 'react';
import './App.css';

// Doc: https://reactjs.org/docs/context.html

const themes = {
  dark: {
    foreground: '#fff',
    background: '#666',
  },
  light: {
    foreground: '#222',
    background: '#eee',
  },
};

/*
  Context provides a way to pass data through the component
  tree without having to pass props down manually at every level.
*/
const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

const UserContext = React.createContext({ name: 'Joe' });

const Button = (props) => (
  <ThemeContext.Consumer>
    {({ theme }) => {
      const style = {
        background: theme.background,
        color: theme.foreground,
      };

      return (
        <button
          style={style}
          onClick={props.onCLick}
        >
          {props.children}
        </button>
      );
    }}
  </ThemeContext.Consumer>
);

class ClassButton extends Component {
  /*
    Assign a contextType to read the current theme context.
    React will find the closest theme Provider above and use its value.
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
    <Button>Edit</Button>
    <Button>Save</Button>
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <Button onCLick={toggleTheme}>Toggle</Button>
      )}
    </ThemeContext.Consumer>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <UserContext.Consumer>
          {user => {
            const style = {
              background: theme.background,
              color: theme.foreground,
            };

            return <div style={style}>{user.name}</div>;
          }}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  </div>
);

const user = { name: 'Jane' };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme, 
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <div className="App">
        {/*
          Use a Provider to pass the current theme to the tree below.
          Any component can read it, no matter how deep it is.
          Toolbar doesn't have to pass the theme down explicitly anymore. 
          
          Because context uses reference identity to determine when to re-render,
          there are some gotchas that could trigger unintentional renders in
          consumers when a provider’s parent re-renders.

          The way changes are determined can cause some issues when passing objects as value,
          see doc: https://reactjs.org/docs/context.html#caveats
        */}
        <UserContext.Provider value={user}>
          <ThemeContext.Provider value={this.state}>
            <Toolbar />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
