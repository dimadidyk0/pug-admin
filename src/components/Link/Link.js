import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom';
import cx from 'classnames';
import s from './Link.css';

function Link ({ className, to, children, ...rest }) {
  return (
    <RouterLink className={cx(s.root, className)} to={to} {...rest}>
      {children}
    </RouterLink>
  )
};
Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Link.defaultProps = {
  className: '',
}

export default Link;