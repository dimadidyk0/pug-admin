import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <Header />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Create <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
