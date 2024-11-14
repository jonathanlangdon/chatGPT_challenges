//Surround the call to processNumbers with a try-catch statement.

let toProcess = [1, 2, 5, 7];
let processedValue = 0;

try {
  processedValue = processNumbers(toProcess);
} catch {
  processedValue = -1;
}
