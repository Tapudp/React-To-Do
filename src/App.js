import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mehlcome ToDo app</h1>
        </header>
        <p className="App-intro">
          let's work on <code>src/App.js</code> and create something amazing.
        </p>
      </div>
    );
  }
}

export default App;
