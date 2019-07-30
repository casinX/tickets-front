import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import TopBar from './TopBar';
import Filters from './Filters';
import List from './List';

import ListStore from './stores/List';

import styles from './styles.scss';


export const stores = {
  list: null,
};


class Root extends PureComponent {

  constructor(props) {
    super(props);

    stores.list = new ListStore();

    this.attach(stores.list);
  }

  componentDidMount = () => {
    stores.list.load();
  };

  render() {
    const hasTickets = stores.list.tickets !== null;

    return <div className={styles.root}>
      <TopBar/>
      { hasTickets && <div className={styles.content}>
        <Filters/>
        <List/>
      </div> }
    </div>;
  }
}


Root.propTypes = {};

Root.defaultProps = {};


export default <Root/>;
