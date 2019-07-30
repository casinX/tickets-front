export default (entities) => {
  return Object.values(entities).reduce((accumulator, ticket) => {
    const { min, max } = accumulator;
    return {
      min: min === null ? ticket.stops : Math.min(min, ticket.stops),
      max: max === null ? ticket.stops : Math.max(max, ticket.stops),
    };
  }, { min: null, max: null });
};