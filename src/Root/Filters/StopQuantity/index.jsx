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
    const { values, min, max } = stores.stopsFilter;

    const checkboxes = [];

    for(let i = min; i <= max; i++){
      checkboxes.push(
        <Checkbox
          key={i}
          applyArg={i}
          onClick={this.toggleQuantity}
          value={values[i]}
          onClickSingle={this.setOnly}
        >
          { i === 0 ? 'Без пересадок' : `${i} ${pluralize(i, 'пересадка', 'пересадки', 'пересадок')}` }
        </Checkbox>
      )
    }

    return <div className={ styles.root }>
      <SectionTitle className={styles.title}>
        Количество пересадок
      </SectionTitle>

      <Checkbox
        onClick={this.toggleQuantity}
        value={Object.values(values).every(Boolean)}
      >
        Все
      </Checkbox>

      { checkboxes }
    </div>;
  }
}


StopQuantity.propTypes = {};

StopQuantity.defaultProps = {};


export default StopQuantity;
