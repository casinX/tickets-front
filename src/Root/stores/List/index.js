import Relax, { sync, async } from '@ktx/react-relax';

import TicketsListGet from 'api/TicketsListGet';


class List extends Relax {
  constructor() {
    super();

    this._api = {
      list: new TicketsListGet(),
    };

    this.tickets = null;
  };

  @async()
  load = async () => {
    const [ response ] = await this._api.list.call();

    if(response){
      this.tickets = response;
      console.warn(this.tickets);
    }
  };
}


export default List;
