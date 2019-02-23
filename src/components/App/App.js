import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import './App.css';

const test = 'Test variable';

class App extends Component {
  render() {
    console.log(test);

    return (
      <div className="App">
        <h1>Develop Umary</h1>
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

const pug = 'Umary';

export default App;
