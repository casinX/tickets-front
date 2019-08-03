import React from 'react';
import propTypes from 'prop-types';

import Box from './Box';

import styles from './styles.scss';


const Checkbox = React.memo((props) => {
  const {
    onClick,
    value,
    onClickSingle,
    children,
    applyArg,
  } = props;

  return <div
    className={ styles.root }
    onClick={() => onClick(applyArg)}
  >
    <Box value={value}/>

    <label className={styles.content}>
      { children }
    </label>

    { onClickSingle !== null && <button
      className={styles.only}
      onClick={(e) => {
        e.stopPropagation();
        onClickSingle(applyArg);
      }}
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
  applyArg: propTypes.any,
};

Checkbox.defaultProps = {
  onClickSingle: null,
  applyArg: null,
};


export default Checkbox;
