import React from 'react';
import propTypes from 'prop-types';

import aeroflot from './img/aeroflot.svg';
import britishAirways from './img/britishAirways.svg';
import s7 from './img/s7.svg';
import turkishAirlines from './img/turkishAirlines.svg';


const LOGO_MAP = {
  'SU': aeroflot,
  'BA': britishAirways,
  'S7': s7,
  'TK': turkishAirlines,
};


const Logo = React.memo((props) => {
  const {
    carrier,
    className,
  } = props;

  return <img
    className={className}
    src={LOGO_MAP[carrier]}
    alt={carrier}
  />
});


Logo.propTypes = {
  carrier: propTypes.oneOf(Object.keys(LOGO_MAP)).isRequired,
  className: propTypes.string.isRequired,
};

Logo.defaultProps = {};


export default Logo;
