// check for non-numbers and print error while summing 2 inputs

function printSum(x, y) {
  if (isNaN(x) && isNaN(y)) {
    console.log(`'${x}' and '${y}' are not numbers.`);
    return;
  }
  if (isNaN(x)) {
    console.log(`'${x}' is not a number.`);
    return;
  }
  if (isNaN(y)) {
    console.log(`'${y}' is not a number.`);
    return;
  }
  console.log(`Sum is ${x + y}.`);
}

printSum(3, 6); // 9
printSum(3.5, 6.1); // 9.6
printSum('hello', 6); // 'hello' is not a number
printSum(10, 'hi'); // 'hi' is not a number
printSum('hello', 'hi'); // 'hello' and 'hi' are not numbers
