// use a replacer array to filter JSON data

let jsonStructure = { year: 2013, month: 2, day: 9, hour: 5, minute: 32 };

const stringData = JSON.stringify(jsonStructure, ['month', 'day']);

console.log(stringData); // only contains month & day now
