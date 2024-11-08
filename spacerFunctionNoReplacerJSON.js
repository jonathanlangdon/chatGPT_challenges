// Use a spacer function of JSON.stringify to use 3 consecutive hashes (#) for indentation, and display the result on the console.

let jsonStructure = {
  day: 'Thursday',
  date: { year: 2015, month: 2, day: 12 },
  time: { hour: 11, minute: 44 }
};

console.log(JSON.stringify(jsonStructure, null, '###'));
