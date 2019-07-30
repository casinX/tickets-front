import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.scss';


const Button = React.memo((props) => {
  const {
    onClick,
    children
  } = props;

  return <button
    className={ styles.root }
    onClick={onClick}
  >
    { children }
  </button>;
});


Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.any.isRequired,
};

Button.defaultProps = {};


export default Button;
