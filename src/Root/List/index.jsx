import React from 'react';

import styles from './styles.scss';


class List extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className={ styles.root }>
      List
    </div>;
  }
}


List.propTypes = {};

List.defaultProps = {};


export default List;
