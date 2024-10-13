// remove an actor from cast object

let firstCast = {
  'Matthew McConaughey': 'Cooper',
  'Anne Hathaway': 'Brand',
  'Jessica Chastain': 'Murph',
  'Matt Damon': 'Mann',
  'Mackenzie Foy': 'Young Murph'
};

function deleteFromMovie(actorName, cast) {
  if (actorName in cast) {
    delete cast[actorName];
    return 'Actor deleted';
  } else return 'Not in this cast';
}

console.log(deleteFromMovie('Jessica Chastain', firstCast));
console.log(deleteFromMovie('Justin Chastain', firstCast));

console.log(firstCast);
