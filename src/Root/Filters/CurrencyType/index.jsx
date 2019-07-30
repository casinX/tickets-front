import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import SectionTitle from 'components/SectionTitle';
import Switch from 'components/Switch';

import currencyTypes from 'config/currencyTypes';

import { stores } from 'Root';

import styles from './styles.scss';


const ITEMS = currencyTypes.order.map(key => {
  const entity = currencyTypes.entities[key];
  return { content: entity.name, value: key };
});


class CurrencyType extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(stores.currency);
  }

  onChange = (value) => {
    stores.currency.setType(value);
  };

  render() {
    const { type } = stores.currency;

    return <div className={ styles.root }>
      <SectionTitle>
        Валюта
      </SectionTitle>
      <Switch
        className={styles.switch}
        items={ITEMS}
        value={type}
        onChange={this.onChange}
      />
    </div>;
  }
}


CurrencyType.propTypes = {};

CurrencyType.defaultProps = {};


export default CurrencyType;
