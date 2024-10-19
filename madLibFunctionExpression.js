// function expression that has five parameters in the order: an adjective, an adverb, two nouns and a verb.

const madLib = function (adj, adv, noun1, noun2, verb) {
  return `The ${adj} ${noun1} ${adv} ${verb} the ${noun2}.`;
};

console.log(madLib('lazy', 'quietly', 'dog', 'moon', 'smashed'));
// The lazy dog quietly smashed the moon.
