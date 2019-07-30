import Relax, { sync, async } from '@ktx/react-relax';

import ExchangeRatesGet from 'api/ExchangeRatesGet';

import currencyTypes from 'config/currencyTypes';


class Currency extends Relax {
  constructor() {
    super();

    this._api = {
      rates: new ExchangeRatesGet(),
    };

    this.rates = null;
    this.type = null;
  };

  @sync()
  setType = (type) => {
    this.type = type;
  };

  @async()
  loadRates = async () => {
    const [response] = await this._api.rates.call();

    if(response){
      this.rates = response;
      this.setType(currencyTypes.keys.RUB);
    }
  };
}


export default Currency;
