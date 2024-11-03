// return count of 'a' in a string

function getCountA(phrase) {
  return phrase.split('').filter(c => c === 'a').length;

  //Method 2
  // return phrase.split('').reduce((a, c) => c === 'a' ? a + 1 : a, 0)

  // Method 3
  // let count = 0
  // phrase.split('').map(c => c === 'a' ? count++ : 0)
  // return count;
}

let oldProverb = 'When in Rome do as Romans do.'; //2
let timesAppeared = getCountA(oldProverb);
console.log(timesAppeared);

oldProverb = "You can lead a horse to water, but you can't make him drink.";
timesAppeared = getCountA(oldProverb); // 6
console.log(timesAppeared);
