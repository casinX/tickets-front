import React from 'react';
import propTypes from 'prop-types';

import logo from './img/logo.svg';

import styles from './styles.scss';


const TopBar = React.memo((props) => {
  const {
    isLoading,
  } = props;

  return <div className={ styles.root }>
    <img
      className={`${styles.logo} ${isLoading ? styles.pulse : styles.static}`}
      src={logo}
      alt="Билеты"
    />
  </div>;
});


TopBar.propTypes = {
  isLoading: propTypes.bool.isRequired,
};

TopBar.defaultProps = {};


export default TopBar;
