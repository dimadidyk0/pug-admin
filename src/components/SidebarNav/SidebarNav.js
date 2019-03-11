import React, { Component } from 'react';
import { SIDEBAR_NAV } from 'assets/data/navigation';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';
import s from './SidebarNav.css';

class SidebarNav extends Component {
  render() {
    console.log(SIDEBAR_NAV);

    return (
      <div className={s.root}>
        {SIDEBAR_NAV.map(({ title, imageSrc, href, imageAlt }) => (
          <SidebarNavItem
            key={title}
            title={title}
            href={href}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    )
  }
}

export default SidebarNav;