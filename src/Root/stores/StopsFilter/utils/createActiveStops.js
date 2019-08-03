export default (availableStops, defaultValue=true) => {
  return availableStops.reduce((accumulator, quantity) => {
    accumulator[quantity] = defaultValue;
    return accumulator;
  }, {});
};