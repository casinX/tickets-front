import React from 'react';
import propTypes from 'prop-types';

import Way from './Way';
import TimeAndStops from './TimeAndStops';

import styles from './styles.scss';


const Info = React.memo((props) => {
  const {
    arrivalTime,
    departureTime,
    stops,
    arrivalDate,
    departureDate,
    destination,
    destinationName,
    origin,
    originName,
  } = props;

  return <div className={ styles.root }>
    <div className={styles.container}>
      <TimeAndStops
        arrivalTime={arrivalTime}
        departureTime={departureTime}
        stops={stops}
      />
    </div>
    <div className={styles.container}>
      <Way
        arrivalDate={arrivalDate}
        departureDate={departureDate}
        destination={destination}
        destinationName={destinationName}
        origin={origin}
        originName={originName}
      />
    </div>
  </div>;
});


Info.propTypes = {
  arrivalTime: propTypes.string.isRequired,
  departureTime: propTypes.string.isRequired,
  stops: propTypes.number.isRequired,
  arrivalDate: propTypes.string.isRequired,
  departureDate: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
  destinationName: propTypes.string.isRequired,
  origin: propTypes.string.isRequired,
  originName: propTypes.string.isRequired,
};

Info.defaultProps = {};


export default Info;
