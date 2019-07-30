import React from 'react';
import pluralize from 'utils/strings/pluralize';

import styles from './styles.scss';


const TimeAndStops = React.memo((props) => {
  const {
    arrivalTime,
    departureTime,
    stops,
  } = props;

  return <>
    <span className={styles.time}>
      { arrivalTime }
    </span>
    <div className={styles.stops}>
      <span className={styles.text}>
        { stops > 0 ? `${ stops } ${ pluralize(stops, 'пересадка', 'пересадки', 'пересадок') }` : ' ' }
      </span>
      <div className={styles.way}/>
    </div>
    <span className={styles.time}>
      { departureTime }
    </span>
  </>
});


TimeAndStops.propTypes = {};

TimeAndStops.defaultProps = {};


export default TimeAndStops;
