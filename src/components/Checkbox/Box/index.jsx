import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.scss';


const Box = React.memo((props) => {
  const { value } = props;

  return <span
      className={`
        ${styles.root}
        ${value ? styles.active : styles.inactive}
      `}
    >
      <span className={styles.icon}/>
    </span>
});


Box.propTypes = {
  value: propTypes.bool.isRequired,
};

Box.defaultProps = {};


export default Box;
