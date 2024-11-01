//display the day from the regular expression match in result.

const re = /(\d+)\/(\d+)\/(\d+)/;
const date = '17/8/2012';
const result = re.exec(date);

console.log(result[0].match(/\d+/));
