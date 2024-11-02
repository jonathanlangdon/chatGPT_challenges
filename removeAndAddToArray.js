// Remove the last two elements, then add a 2 to the end of the array.

let userArray = [4, 2, 8, 5, 0, 1, 6]; // Tests may use different array values

userArray = userArray.slice(0, -2).concat(2);

console.log(userArray); // 4, 2, 8, 5, 0, 2
