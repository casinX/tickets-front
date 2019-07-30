import React from 'react';

import logo from './img/logo.svg';

import styles from './styles.scss';


const TopBar = React.memo((props) => {
  const {} = props;

  return <div className={ styles.root }>
    <img className={styles.logo} src={logo} alt="Билеты"/>
  </div>;
});


TopBar.propTypes = {};

TopBar.defaultProps = {};


export default TopBar;
