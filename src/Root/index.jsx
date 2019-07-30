import React from 'react';

import TopBar from './TopBar';
import Filters from './Filters';
import List from './List';

import styles from './styles.scss';


class Root extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.root}>
      <TopBar/>
      <div className={styles.content}>
        <Filters/>
        <List/>
      </div>
    </div>;
  }
}


Root.propTypes = {};

Root.defaultProps = {};


export default <Root/>;
