// Add each element in sourceArray with the corresponding value in offsetArray. Store each value in a new array named finalArray.

let sourceArray = [40, 50, 60, 70];
let offsetArray = [2, 5, 8, 4];
let finalArray = [];

console.log(sourceArray.map((n, i) => n + offsetArray[i]));
