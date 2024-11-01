//RegExp object that remembers the title and first name, but does not remember the last name. Using the RegExp object's exec() method, assign the result variable with the remembered title and first name of the string userName.

const userName = 'Dr. Greg House';

const re = /(\w+\.)\s(\w+)\s\w+/;
const result = re.exec(userName);

console.log(result[0]); // Dr. Greg House
console.log(result[1]); // Dr.
console.log(result[2]); // Greg
