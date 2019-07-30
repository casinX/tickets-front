import React from 'react';
import propTypes from 'prop-types';

import DDMMYYtoHumanDate from 'utils/time/DDMMYYtoHumanDate';

import styles from './styles.scss';


const Way = React.memo((props) => {
  const {
    arrivalDate,
    departureDate,
    destination,
    destinationName,
    origin,
    originName,
  } = props;

  return <>
    <div className={styles.from}>
      <span className={styles.name}>{ origin }, { originName }</span>
      <span className={styles.date}>{ DDMMYYtoHumanDate(departureDate) }</span>
    </div>

    <div className={styles.to}>
      <span className={styles.name}>{ destination }, { destinationName }</span>
      <span className={styles.date}>{ DDMMYYtoHumanDate(arrivalDate) }</span>
    </div>
  </>;
});


Way.propTypes = {
  arrivalDate: propTypes.string.isRequired,
  departureDate: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
  destinationName: propTypes.string.isRequired,
  origin: propTypes.string.isRequired,
  originName: propTypes.string.isRequired,
};

Way.defaultProps = {};


export default Way;
