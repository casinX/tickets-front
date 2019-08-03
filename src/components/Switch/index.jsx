import React from 'react';
import propTypes from 'prop-types';

import Tab from './Tab';

import styles from './styles.scss';


const Switch = React.memo((props) => {
  const {
    items,
    value,
    onChange,
    className,
  } = props;

  return <ul className={ `${styles.root} ${className}` }>
    <div className={styles.substrate}/>
    { items.map(item => {
      return <Tab
        isSelected={item.value === value}
        key={item.value}
        onClick={() => onChange(item.value)}
      >
        { item.content }
      </Tab>
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
