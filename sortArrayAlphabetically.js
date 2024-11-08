//Loop through the array and output the values in alphabetical order.

let namesList = ['Ron', 'Ann', 'Bob', 'Joe'];

namesList.sort((a, b) => a.localeCompare(b)).map(a => console.log(a));

console.log(namesList);

/* 
Ann
Bob
Joe
Ron
*/
