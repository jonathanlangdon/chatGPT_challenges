// Use indexOf(), and substr() or substring(), to display the end of the sentence starting from the word "Rome".

function romeToEnd(phrase) {
  return phrase.slice(phrase.indexOf('Rome'));

  //method 2
  // return phrase.substr(phrase.indexOf('Rome'))
}

let oldProverb = 'When in Rome do as Romans do.';
console.log(romeToEnd(oldProverb));

oldProverb = 'The Fontana di Trevi, in Rome, was my favorite.';
console.log(romeToEnd(oldProverb));
