// using get with Map() create actor information

let actors1 = new Map(); // Code will be tested with different actors

actors1.set('Christopher Lee', {
  movie: 'The Lord of the Rings',
  role: 'Saruman'
});
actors1.set('Geoffrey Rush', {
  movie: 'Pirates of the Caribbean',
  role: 'Hector Barbossa'
});
actors1.set('Anne Hathaway', { movie: 'Interstellar', role: 'Brand' });
actors1.set('Tom Hanks', { movie: 'Forrest Gump', role: 'Forrest Gump' });

function actorInfo(actorName, actors) {
  if (!actors.get(actorName)) {
    console.log('Actor not found');
  } else {
    console.log(
      `${actorName} plays ${actors.get(actorName).role} in ${
        actors.get(actorName).movie
      }`
    );
  }
}

actorInfo('Christopher Lee', actors1);
