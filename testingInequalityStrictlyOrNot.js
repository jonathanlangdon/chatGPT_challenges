// test for both inequality and non-identity

let compareNumber = 3; // Code will be tested with: 3, 8, 42
let userNumber = '3'; // Code will be tested with: "3", 8, "Hi"

/* Your solution goes here */
if (!(compareNumber == userNumber))
  console.log('Variables are not equal in value');
if (!(compareNumber === userNumber)) console.log('Variables are not identical');
