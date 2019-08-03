import Relax, { sync } from '@ktx/react-relax';

import createActiveStops from './utils/createActiveStops';
import getAvailableStops from './utils/getAvailableStops';


class StopsFilter extends Relax {
  constructor(listStore) {
    super();

    this._listStore = listStore;
    this._listStore.onLoadList.subscribe(this.onLoadList);

    this.activeStops = null;
    this.availableStops = null;
  };

  @sync()
  onLoadList = () => {
    const { entities } = this._listStore.tickets;

    this.availableStops = getAvailableStops(entities);
    this.activeStops = createActiveStops(this.availableStops);
  };

  @sync()
  toggleQuantity = (quantity) => {

    if(quantity === null){
      const isSelectedAll = Object.values(this.activeStops).every(Boolean);
      this.activeStops = createActiveStops(this.availableStops, !isSelectedAll);
      return;
    }

    // нужна копия тк используется в мемоизации фильтра в рендере
    this.activeStops = {
      ...this.activeStops,
      [quantity]: !this.activeStops[quantity],
    };
  };

  @sync()
  setOnly = (quantity) => {
    this.activeStops = createActiveStops(this.availableStops, false);
    this.activeStops[quantity] = true;
  };
}


export default StopsFilter;
