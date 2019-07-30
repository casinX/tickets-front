import React from 'react';

import CurrencyType from './CurrencyType';

import styles from './styles.scss';


class Filters extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className={ styles.root }>
      <CurrencyType/>
    </div>;
  }
}


Filters.propTypes = {};

Filters.defaultProps = {};


export default Filters;
