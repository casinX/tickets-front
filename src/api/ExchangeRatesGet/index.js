import Api from '@ktx/api-connection';

import currencyTypes from 'config/currencyTypes';


class ExchangeRatesGet extends Api{
  constructor(){
    super({
      url: 'https://www.cbr-xml-daily.ru/daily_json.js',
    });
  }

  response = (response) => {
    const result = {};

    Object.entries(response.data.Valute).forEach(entry => {
      const [key, value] = entry;
      result[key] = value.Value;
    });

    result[currencyTypes.keys.RUB] = 1;

    return result;
  };
}


export default ExchangeRatesGet;
