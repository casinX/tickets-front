export default (entities) => {
  const stopsMap = Object.values(entities).reduce((accumulator, ticket) => {
    accumulator[ticket.stops] = true;
    return accumulator;
  }, {});

  return Object.keys(stopsMap).map(Number).sort((a, b) => {
    return a - b;
  })
};