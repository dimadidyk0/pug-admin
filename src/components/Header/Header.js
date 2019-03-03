import React, { Component } from 'react'
import s from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={s.root}>
        Header
        <div>Tab 0</div>
        <div>Tab 1</div>
      </div>
    )
  }
}

export default Header;