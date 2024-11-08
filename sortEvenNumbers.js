// filter an array for even integers and return the array in numerical order.

const sortEvens = numArray =>
  numArray.filter(n => n % 2 == 0).sort((a, b) => a - b);

console.log(sortEvens([4, 2, 9, 1, 8])); // 2, 4, 8
console.log(sortEvens([3, 200, 15, 68, 9, 7])); // 68, 200

export default sortEvens;
