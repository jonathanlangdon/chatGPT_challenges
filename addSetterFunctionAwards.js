// Define a setter function named wonAward() that takes a parameter for the name of an award and pushes the award name onto the end of the awards array.

let movie = {
  title: 'Interstellar',
  director: 'Christopher Nolan',
  composer: 'Hans Zimmer',
  budget: 165000000,
  boxOffice: 675100000,
  awards: [],

  set wonAward(awardName) {
    this.awards.push(awardName);
  }
};
