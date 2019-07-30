import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import SectionTitle from 'components/SectionTitle';
import Checkbox from 'components/Checkbox';

import styles from './styles.scss';


const MAX = 3;


const getInitialState = () => {
  const initialState = {};

  for(let i = 0; i <= MAX; i++){
    initialState[i] = true;
  }

  return initialState;
};


class StopQuantity extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      values: getInitialState(),
    }
  }

  toggleQuantity = (key) => () => {

    // todo all
    this.setState(prevState => {
      const { values } = prevState;

      return {
        ...prevState,
        values: {
          ...values,
          [key]: !values[key],
        }
      }
    });
  };

  render() {
    const { values } = this.state;

    return <div className={ styles.root }>
      <SectionTitle className={styles.title}>
        Количество пересадок
      </SectionTitle>

      <Checkbox
        onClick={this.toggleQuantity('all')}
        value={Object.values(this.state.values).every(Boolean)}
      >
        Все
      </Checkbox>

      <Checkbox
        onClick={this.toggleQuantity(0)}
        value={values[0]}
      >
        Без пересадок
      </Checkbox>

      <Checkbox
        onClick={this.toggleQuantity(1)}
        value={values[1]}
        onClickSingle={() => {console.warn('single')}}
      >
        1 пересадка
      </Checkbox>

      <Checkbox
        onClick={this.toggleQuantity(2)}
        value={values[2]}
      >
        2 пересадки
      </Checkbox>

      <Checkbox
        onClick={this.toggleQuantity(3)}
        value={values[3]}
      >
        3 пересадки
      </Checkbox>
    </div>;
  }
}


StopQuantity.propTypes = {};

StopQuantity.defaultProps = {};


export default StopQuantity;
