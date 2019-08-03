import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import SectionTitle from 'components/SectionTitle';
import Checkbox from 'components/Checkbox';

import pluralize from 'utils/strings/pluralize';

import { stores } from 'Root';

import styles from './styles.scss';


class StopQuantity extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(stores.stopsFilter);
  }

  toggleQuantity = (quantity) => {
    stores.stopsFilter.toggleQuantity(quantity);
  };

  setOnly = (quantity) => {
    stores.stopsFilter.setOnly(quantity);
  };

  render() {
    const { activeStops, availableStops } = stores.stopsFilter;

    return <div className={ styles.root }>
      <SectionTitle className={styles.title}>
        Количество пересадок
      </SectionTitle>

      <Checkbox
        onClick={this.toggleQuantity}
        isChecked={Object.values(activeStops).every(Boolean)}
      >
        Все
      </Checkbox>

      { availableStops.map(quantity => {
        return <Checkbox
          key={quantity}
          value={quantity}
          isChecked={activeStops[quantity]}
          onClick={this.toggleQuantity}
          onClickSingle={this.setOnly}
        >
          {
            quantity === 0 ?
            'Без пересадок' :
            `${quantity} ${pluralize(quantity, 'пересадка', 'пересадки', 'пересадок')}`
          }
        </Checkbox>
      }) }
    </div>;
  }
}


StopQuantity.propTypes = {};

StopQuantity.defaultProps = {};


export default StopQuantity;
