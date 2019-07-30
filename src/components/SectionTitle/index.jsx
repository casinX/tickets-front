import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.scss';


const SectionTitle = React.memo((props) => {
  const {
    children,
    className,
  } = props;

  return <h4 className={ `${styles.root} ${className}` }>
    { children }
  </h4>;
});


SectionTitle.propTypes = {
  children: propTypes.any.isRequired,
  className: propTypes.string,
};

SectionTitle.defaultProps = {
  className: null,
};


export default SectionTitle;
