// мемоизация под конкретную функцию, не вижу смысла писать отдельную на
// shallow equal или на переводе аргументо в JSON так будет долго
// из такого же размера цикла


const prev = {
  stopValues: null,
  ticketIds: null,
  result: null,
};


export default (tickets, stopValues) => {
  if(stopValues === prev.stopValues && tickets.ids === prev.ticketIds){
    return prev.result;
  }

  const result = tickets.ids.filter(id => {
    const entity = tickets.entities[id];
    return stopValues[entity.stops];
  });

  prev.stopValues = stopValues;
  prev.ticketIds = tickets.ids;
  prev.result = result;

  return result;
}