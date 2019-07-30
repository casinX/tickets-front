import React from 'react';
import propTypes from 'prop-types';

import Logo from './Logo';
import Button from './Button';

import styles from './styles.scss';


const Carrier = React.memo((props) => {
  const {
    value,
    price,
    currencySign,
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
      за { price }{ currencySign }
    </Button>
  </div>;
});


Carrier.propTypes = {
  value: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  currencySign: propTypes.string.isRequired,
  onClickBuy: propTypes.func.isRequired,
};

Carrier.defaultProps = {};


export default Carrier;
