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
      <div className="title">
        <Option />
      </div>
    );
  }
}
