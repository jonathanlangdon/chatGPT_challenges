//Assign jsonData with the parsed value of the stringStructure variable. Then, assign "Power forward" to the position property in jsonData and assign stringStructure with the stringified version of jsonData.

let stringStructure =
  '{ "name": "Pau Gasol", "height": { "ft": 7, "in": 0 }, "points": 22, "position": "Point guard" }';

const jsonData = JSON.parse(stringStructure);
jsonData.position = 'Power forward';
stringStructure = JSON.stringify(jsonData);

console.log(jsonData);
console.log(stringStructure);
