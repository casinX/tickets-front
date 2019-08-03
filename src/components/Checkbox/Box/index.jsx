import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.scss';


const Box = React.memo((props) => {
  const { isChecked } = props;

  return <span
      className={`
        ${styles.root}
        ${isChecked ? styles.active : styles.inactive}
      `}
    >
      <span className={styles.icon}/>
    </span>
});


Box.propTypes = {
  isChecked: propTypes.bool.isRequired,
};

Box.defaultProps = {};


export default Box;
