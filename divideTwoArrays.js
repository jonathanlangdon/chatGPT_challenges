// create new array that is a division of all elements from 2 starting arrays

let sourceArray = [40, 50, 60, 70];
let offsetArray = [2, 5, 8, 4];
let destinationArray = [];

for (let i = 0; i < sourceArray.length; i++) {
  destinationArray.push(sourceArray[i] / offsetArray[i]);
}
