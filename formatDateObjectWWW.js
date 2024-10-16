// Display the date when the World Wide Web was born in M/YYYY format. Hint: getMonth() gets the month number. Months are numbered from 0 to 11. January is month 0. getFullYear() gets the 4 digit year. Ex: The 31st of January 1970 should be displayed as: "1/1970".

let interestingEvents = {
  'Long distance telegraph': new Date(1844, 4, 24),
  'First telephone call': new Date(1876, 2, 10),
  'Microsoft founded': new Date(1975, 3, 4),
  'World Wide Web born': new Date(1989, 2, 1),
  'Google founded': new Date(1998, 8, 4),
  'Facebook website launch': new Date(2004, 1, 4)
};

let interestingDate = interestingEvents['World Wide Web born'];

const www = interestingDate;
console.log(`${www.getMonth() + 1}/${www.getFullYear()}`);
