import React from 'react';
import { PureComponent } from '@ktx/react-relax';
import propTypes from 'prop-types';

import { stores } from 'Root';
import LoadingStub from 'components/LoadingStub';

import Ticket from './Ticket';
import filterTickets from './utils/filterTickets';

import ticketStyles from './Ticket/styles.scss';
import styles from './styles.scss';


class List extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(stores.list, stores.currency, stores.stopsFilter);
  }

  render() {
    const { isLoading } = this.props;

    if(isLoading){
      return <div className={ styles.root }>
        <LoadingStub className={ticketStyles.rootBase}/>
        <LoadingStub className={ticketStyles.rootBase}/>
        <LoadingStub className={ticketStyles.rootBase}/>
      </div>;
    }

    const { tickets } = stores.list;
    const { type: currencyType, rates } = stores.currency;
    const { values: stopValues } = stores.stopsFilter;

    const filteredIds = filterTickets(tickets, stopValues);
    const isEmpty = filteredIds.length === 0;

    return <div className={ styles.root }>
      { !isEmpty && filteredIds.map(id => {
        const entity = tickets.entities[id];
        return <Ticket
          key={id}
          data={entity}
          priceByCurrency={Math.ceil(entity.price / rates[currencyType])}
          currencyType={currencyType}
        />
      }) }

      { isEmpty && <div className={styles.emptyStub}>
        Ничего не найдено
      </div> }
    </div>;
  }
}


List.propTypes = {
  isLoading: propTypes.bool.isRequired,
};

List.defaultProps = {};


export default List;
