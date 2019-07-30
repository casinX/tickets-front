import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.scss';


const Tab = React.memo((props) => {
  const {
    isSelected,
    onClick,
    children,
  } = props;

  return <div
    className={`
      ${styles.root}
      ${isSelected ? styles.selected : styles.unSelected }
    `}
    onClick={onClick}
  >
    { children }
  </div>;
});


Tab.propTypes = {
  isSelected: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  children: propTypes.any.isRequired,
};

Tab.defaultProps = {};


export default Tab;
