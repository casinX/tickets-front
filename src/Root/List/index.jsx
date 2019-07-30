import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import { stores } from 'Root';

import Ticket from './Ticket';

import styles from './styles.scss';


class List extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(stores.list);
  }

  render() {
    const { tickets } = stores.list;

    return <div className={ styles.root }>
      { tickets.ids.map(id => {
        const entity = tickets.entities[id];

        return <Ticket
          key={id}
          data={entity}
          currencySign={'₽'}
        />
      }) }
    </div>;
  }
}


List.propTypes = {};

List.defaultProps = {};


export default List;
