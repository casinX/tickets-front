import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import SectionTitle from 'components/SectionTitle';
import Switch from 'components/Switch';

import styles from './styles.scss';


class CurrencyType extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      currency: 'RUB',
    };
  }

  onChange = (value) => {
    this.setState({
      currency: value,
    })
  };

  render() {
    return <div className={ styles.root }>
      <SectionTitle>
        Валюта
      </SectionTitle>
      <Switch
        className={styles.switch}
        items={[
          { content: 'RUB', value: 'RUB' },
          { content: 'USD', value: 'USD' },
          { content: 'EUR', value: 'EUR' },
        ]}
        value={this.state.currency}
        onChange={this.onChange}
      />
    </div>;
  }
}


CurrencyType.propTypes = {};

CurrencyType.defaultProps = {};


export default CurrencyType;
