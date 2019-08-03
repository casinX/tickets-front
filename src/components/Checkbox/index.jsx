import React from 'react';
import propTypes from 'prop-types';

import Box from './Box';

import styles from './styles.scss';


const Checkbox = React.memo((props) => {
  const {
    onClick,
    value,
    isChecked,
    onClickSingle,
    children,
  } = props;

  return <div
    className={ styles.root }
    onClick={() => onClick(value)}
  >
    <Box isChecked={isChecked}/>

    <label className={styles.content}>
      { children }
    </label>

    { onClickSingle !== null && <button
      className={styles.only}
      onClick={(e) => {
        e.stopPropagation();
        onClickSingle(value);
      }}
    >
      Только
    </button> }
  </div>;
});


Checkbox.propTypes = {
  children: propTypes.any.isRequired,
  onClick: propTypes.func.isRequired,
  isChecked: propTypes.bool.isRequired,
  onClickSingle: propTypes.func,
  value: propTypes.any,
};

Checkbox.defaultProps = {
  onClickSingle: null,
  value: null,
};


export default Checkbox;
