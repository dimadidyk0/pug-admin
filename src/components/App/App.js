import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from 'components/Nav/Nav';
import Home from 'routes/Home/Home';
import ErrorPage from 'routes/ErrorPage/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />

          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={ErrorPage} />
          <Route path="/products" component={ErrorPage} />
          <Route path="/contacts" component={ErrorPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
