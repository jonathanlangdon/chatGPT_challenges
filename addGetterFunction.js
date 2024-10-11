//Define a getter function named totalRevenue() that subtracts budget from boxOffice and returns the result.

let movie = {
  title: 'Interstellar',
  director: 'Christopher Nolan',
  composer: 'Hans Zimmer',
  budget: 165000000,
  boxOffice: 675100000,
  awards: [],

  get totalRevenue() {
    return this.boxOffice - this.budget;
  }
};
