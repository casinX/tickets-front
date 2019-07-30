import React from 'react';
import propTypes from 'prop-types';

import currencyTypes from 'config/currencyTypes';

import Logo from './Logo';
import Button from './Button';

import styles from './styles.scss';


const Carrier = React.memo((props) => {
  const {
    value,
    price,
    currencyType,
    onClickBuy,
  } = props;

  return <div className={ styles.root }>
    <Logo
      className={styles.logo}
      carrier={value}
    />

    <Button onClick={onClickBuy}>
      Купить
      <br/>
      за { price }{ currencyTypes.entities[currencyType].sign }
    </Button>
  </div>;
});


Carrier.propTypes = {
  value: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  currencyType: propTypes.string.isRequired,
  onClickBuy: propTypes.func.isRequired,
};

Carrier.defaultProps = {};


export default Carrier;
