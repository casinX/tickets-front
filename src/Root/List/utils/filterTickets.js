// мемоизация под конкретную функцию, не вижу смысла писать отдельную на
// shallow equal или на переводе аргументо в JSON так будет долго
// из такого же размера цикла


const prev = {
  activeStops: null,
  ticketIds: null,
  result: null,
};


export default (tickets, activeStops) => {
  if(activeStops === prev.activeStops && tickets.ids === prev.ticketIds){
    return prev.result;
  }

  const result = tickets.ids.filter(id => {
    const entity = tickets.entities[id];
    return activeStops[entity.stops];
  });

  prev.activeStops = activeStops;
  prev.ticketIds = tickets.ids;
  prev.result = result;

  return result;
}