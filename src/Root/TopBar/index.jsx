import React from 'react';

import styles from './styles.scss';


const TopBar = React.memo((props) => {
  const {} = props;

  return <div className={ styles.root }>
    Logo
  </div>;
});


TopBar.propTypes = {};

TopBar.defaultProps = {};


export default TopBar;
