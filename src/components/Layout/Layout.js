import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SidebarNav from 'components/SidebarNav/SidebarNav';
import s from './Layout.css';

export default class componentName extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  render() {
    const { children } = this.props;

    return (
      <div className={s.root}>
        <SidebarNav />
        {children}

      </div>
    )
  }
}
