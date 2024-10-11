// Find the index of the string "shout" and assign substringIndex with the index. Then, update wiseProverb replacing "shout" with "speak".

let wiseProverb = 'Actions shout louder than words.'; // 8
let substringIndex = 0;

function getIndexAndSpeak(phrase) {
  substringIndex = phrase.indexOf('shout');
  return wiseProverb.replace('shout', 'speak');

  //method 2
  // return wiseProverb.split('shout').join('speak')
}

console.log(getIndexAndSpeak(wiseProverb)); // Actions speak louder than words.
console.log(substringIndex); // 8
