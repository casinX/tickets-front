import Api from '@ktx/api-connection';


class ExchangeRatesGet extends Api{
  constructor(){
    super({
      url: 'https://www.cbr-xml-daily.ru/daily_json.js',
    });
  }

  response = (response) => {
    console.warn(response);
  };
}


export default ExchangeRatesGet;
