import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Title from './Title.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />;
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
