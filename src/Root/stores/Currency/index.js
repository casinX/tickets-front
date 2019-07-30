import Relax, { sync, async } from '@ktx/react-relax';

import ExchangeRatesGet from 'api/ExchangeRatesGet';


class Currency extends Relax {
  constructor() {
    super();

    this._api = {
      rates: new ExchangeRatesGet(),
    };

    this.rates = null;
    this.currency = null;
  };

  @sync()
  setCurrency = () => {

  };

  @async()
  loadRates = async () => {
    const [response] = await this._api.rates.call();

    if(response){
      this.rates = response;
    }
  };
}


export default Currency;
