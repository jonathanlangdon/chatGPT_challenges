// Add parentheses to the regular expression to remember the street number (which is: 613) and street name (which is: Amp St), but not remember the apartment number.

const address = '613 Amp St, Apt 57';

const re = /(\d+)\s(\w+\s\w+),\s\w+\s\d+/;

const result = re.exec(address);
console.log(result[0]); // 613 Amp St, Apt 57
console.log(result[1]); // 613
console.log(result[2]); // Amp St
