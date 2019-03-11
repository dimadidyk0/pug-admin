import React from 'react';
import PropTypes from 'prop-types'
import Link from 'components/Link/Link';
import s from './SidebarNavItem.css';

function SidebarNavItem ({ title, href, imageSrc, imageAlt }) {
  return (
    <Link className={s.root} to={href}>
      <img src={imageSrc} alt={imageAlt} />
      {title}
    </Link>
  )
};

SidebarNavItem.propTypes = {
  title: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};
SidebarNavItem.defaultProps = {
  imageAlt: '',
}

export default SidebarNavItem;
