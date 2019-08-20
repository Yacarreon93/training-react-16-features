import React, { Component } from 'react';
import './App.css';

const Profile = props => (
  <div>{props.user.name}</div>
);

class App extends Component {
  state = {
    user: { name: 'Arturo' },
  };

  /*
    Click on button to cause an error,
  */
  updateUser = () => this.setState({ user: null });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Profile user={this.state.user} />
          <button onClick={this.updateUser}>Update</button>
        </header>
      </div>
    );
  }
}

export default App;
