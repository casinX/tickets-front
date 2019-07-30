import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.scss';


// todo memoization
const wrap = (func, arg) => () => {
  func(arg);
};


const Switch = React.memo((props) => {
  const {
    items,
    value,
    onChange,
    className,
  } = props;

  return <ul className={ `${styles.root} ${className}` }>
    { items.map(item => {
      return <li
        className={`
          ${styles.tab}
          ${item.value === value ? styles.selected : styles.unSelected }
        `}
        key={item.value}
        onClick={wrap(onChange, item.value)}
      >
        { item.content }
      </li>
    }) }
  </ul>;
});


Switch.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.any,
      content: propTypes.any,
    })
  ).isRequired,
  value: propTypes.any.isRequired,
  onChange: propTypes.func.isRequired,
  className: propTypes.string,
};

Switch.defaultProps = {
  className: null,
};


export default Switch;
