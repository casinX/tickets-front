import React from 'react';
import propTypes from 'prop-types';

import Carrier from './Carrier';
import Info from './Info';

import styles from './styles.scss';


const Ticket = React.memo((props) => {
  const { data, currencySign } = props;

  const {
    carrier,
    price,
    arrivalTime,
    departureTime,
    stops,
    arrivalDate,
    departureDate,
    destination,
    destinationName,
    origin,
    originName,
  } = data;

  return <div className={ styles.root }>
    <Carrier
      value={carrier}
      onClickBuy={() => {}}
      price={price}
      currencySign={currencySign}
    />
    <Info
      arrivalTime={arrivalTime}
      departureTime={departureTime}
      stops={stops}
      arrivalDate={arrivalDate}
      departureDate={departureDate}
      destination={destination}
      destinationName={destinationName}
      origin={origin}
      originName={originName}
    />
  </div>;
});


Ticket.propTypes = {
  data: propTypes.object.isRequired,
  currencySign: propTypes.string.isRequired,
};

Ticket.defaultProps = {};


export default Ticket;
