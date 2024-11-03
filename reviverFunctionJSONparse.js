// Use a reviver function for 2nd parameter in JSON.parse to add 1 to any keys that are 'year'

let stringStructure =
  '{ "year": 2013, "month": 4, "day": 9, "hour": 8, "minute": 38 }';

const jsonObject = JSON.parse(stringStructure, (key, value) => {
  if (key === 'year') return value + 1;
  return value;
});
