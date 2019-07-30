import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.scss';


const LoadingStub = React.memo((props) => {
  const { className } = props;
  return <div className={ `${styles.root} ${className}` }/>;
});


LoadingStub.propTypes = {
  className: propTypes.string,
};

LoadingStub.defaultProps = {
  className: null,
};


export default LoadingStub;
