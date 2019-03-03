import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NAVIGATION } from 'assets/data/navigation';
import s from './Nav.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className={s.list}>
          {NAVIGATION.map(({ to, title }) => (
            <li key={to}>
              <Link to={to}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Header;