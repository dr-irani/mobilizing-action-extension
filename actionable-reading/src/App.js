import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      selectedAction: {},
    };
  }

  render () {
    return (
      <div id="app-root">
        <h1>
          HELLO TEST
        </h1>
      </div>
    );
  }
}

export default App;
