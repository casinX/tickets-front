import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import { stores } from 'Root';

import Ticket from './Ticket';

import styles from './styles.scss';


class List extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(stores.list, stores.currency);
  }

  render() {
    const { tickets } = stores.list;
    const { type: currencyType, rates } = stores.currency;

    return <div className={ styles.root }>
      { tickets.ids.map(id => {
        const entity = tickets.entities[id];

        return <Ticket
          key={id}
          data={entity}
          priceByCurrency={Math.ceil(entity.price / rates[currencyType])}
          currencyType={currencyType}
        />
      }) }
    </div>;
  }
}


List.propTypes = {};

List.defaultProps = {};


export default List;
