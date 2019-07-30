import Relax, { sync } from '@ktx/react-relax';

import getValues from './utils/getValues';
import getMinMaxStops from './utils/getMinMaxStops';


class StopsFilter extends Relax {
  constructor(listStore) {
    super();

    this._listStore = listStore;
    this._listStore.onLoadList.subscribe(this.onLoadList);

    this.values = null;
    this.min = null;
    this.max = null;
  };

  @sync()
  onLoadList = () => {
    const { entities } = this._listStore.tickets;

    const { min, max } = getMinMaxStops(entities);
    this.min = min;
    this.max = max;
    this.values = getValues(this.min, this.max);
  };

  @sync()
  toggleQuantity = (quantity) => {

    if(quantity === null){
      const isSelectedAll = Object.values(this.values).every(Boolean);
      this.values = getValues(this.min, this.max, !isSelectedAll);
      return;
    }

    // нужна копия тк используется в мемоизации фильтра в рендере
    this.values = {
      ...this.values,
      [quantity]: !this.values[quantity],
    };
  };

  @sync()
  setOnly = (quantity) => {
    this.values = getValues(this.min, this.max, false);
    this.values[quantity] = true;
  };
}


export default StopsFilter;
