export default (min, max, defaultValue=true) => {
  const result = {};

  for(let i = min; i <= max; i++){
    result[i] = defaultValue;
  }

  return result;
};