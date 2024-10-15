//Add a finally statement that displays "Execution ended.".

let numList = [1, 2, 5, 7];
let processedValue = 0;

try {
  processedValue = processNumbers(numList);
} catch (exception) {
  processedValue = -1;
} finally {
  console.log('Execution ended.');
}
