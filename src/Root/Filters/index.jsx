import React from 'react';
import propTypes from 'prop-types';

import CurrencyType from './CurrencyType';
import StopQuantity from './StopQuantity';
import LoadingStub from 'components/LoadingStub';

import styles from './styles.scss';


const Filters = React.memo((props) => {

  if(props.isLoading){
    return <LoadingStub className={styles.rootBase} />
  }

  return <div className={ styles.root }>
    <CurrencyType/>
    <StopQuantity/>
  </div>;
});


Filters.propTypes = {
  isLoading: propTypes.bool.isRequired,
};

Filters.defaultProps = {};


export default Filters;
