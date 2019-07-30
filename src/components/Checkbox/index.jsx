import React from 'react';
import propTypes from 'prop-types';

import Box from './Box';

import styles from './styles.scss';


// todo memoization
const noPropagation = (func) => (e) => {
  e.preventDefault();
  e.stopPropagation();
  func();
};


const Checkbox = React.memo((props) => {
  const {
    onClick,
    value,
    onClickSingle,
    children,
  } = props;

  return <div
    className={ styles.root }
    onClick={onClick}
  >
    <Box value={value}/>

    <label className={styles.content}>
      { children }
    </label>

    { onClickSingle !== null && <button
      className={styles.only}
      onClick={noPropagation(onClickSingle)}
    >
      Только
    </button> }
  </div>;
});


Checkbox.propTypes = {
  children: propTypes.any.isRequired,
  onClick: propTypes.func.isRequired,
  value: propTypes.bool.isRequired,
  onClickSingle: propTypes.func,
};

Checkbox.defaultProps = {
  onClickSingle: null,
};


export default Checkbox;
