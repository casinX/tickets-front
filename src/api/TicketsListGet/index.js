import Api, { normalize } from '@ktx/api-connection';

import ticketParser from 'api-parsers/ticket';


class TicketsListGet extends Api{
  constructor(){
    super({
      url: '/api/tickets.list',
    });
  }

  response = (response) => {
    const [ entities, ids ] = normalize({
      array: response.data.tickets,
      parser: ticketParser,
    });

    return { ids, entities };
  }
}


export default TicketsListGet;