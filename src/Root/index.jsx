import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import TopBar from './TopBar';
import Filters from './Filters';
import List from './List';

import ListStore from './stores/List';
import CurrencyStore from './stores/Currency';
import StopsFilterStore from './stores/StopsFilter';

import styles from './styles.scss';


export const stores = {
  list: null,
  currency: null,
  stopsFilter: null,
};


class Root extends PureComponent {

  constructor(props) {
    super(props);

    stores.list = new ListStore();
    stores.currency = new CurrencyStore();
    stores.stopsFilter = new StopsFilterStore(stores.list);

    this.attach(stores.list, stores.currency);
  }

  componentDidMount = () => {
    stores.list.load();
    stores.currency.loadRates();
  };

  render() {
    const isReady = [
      stores.list.tickets !== null,
      stores.currency.rates !== null,
      stores.stopsFilter.values !== null,
    ].every(Boolean);

    return <div className={styles.root}>
      <TopBar/>
      { isReady && <div className={styles.content}>
        <Filters/>
        <List/>
      </div> }
    </div>;
  }
}


Root.propTypes = {};

Root.defaultProps = {};


export default <Root/>;
