import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import { stores } from 'Root';

import Ticket from './Ticket';

import styles from './styles.scss';


class List extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(stores.list, stores.currency, stores.stopsFilter);
  }

  render() {
    const { tickets } = stores.list;
    const { type: currencyType, rates } = stores.currency;
    const { values: stopsValues } = stores.stopsFilter;

    return <div className={ styles.root }>
      { tickets.ids.filter(id => {
        const entity = tickets.entities[id];
        return stopsValues[entity.stops];
      }).map(id => {
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
