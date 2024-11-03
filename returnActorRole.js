// return the role that corresponds to the actor's name in the cast map.

let cast = {
  'Tom Hanks': 'Forrest Gump',
  'Michael Connor Humphreys': 'Young Forrest Gump',
  'Robin Wright': 'Jenny Curran',
  'Gary Sinise': 'Lieutenant Dan Taylor'
};

function roleOf(actorName, cast) {
  return cast[actorName];
}
