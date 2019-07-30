import Relax, { async } from '@ktx/react-relax';

import TicketsListGet from 'api/TicketsListGet';
import Observer from 'lib/Observer';

import sortByPriceASC from './utils/sortByPriceASC';


class List extends Relax {
  constructor() {
    super();

    this._api = {
      list: new TicketsListGet(),
    };

    this.tickets = null;

    this.onLoadList = new Observer();
  };

  @async()
  load = async () => {
    const [ response ] = await this._api.list.call();

    if(response){
      this.tickets = response;
      this.tickets.ids = sortByPriceASC(this.tickets);
      this.onLoadList.notifyAll();
    }
  };
}


export default List;
