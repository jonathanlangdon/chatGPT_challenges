// Define a method named orderOfAppearance() that takes the name of a role as an argument and returns that role's order of appearance. If the role is not found, the method returns 0

let movie = {
  title: 'Forrest Gump',
  director: 'Robert Zemeckis',
  composer: 'Alan Silvestri',
  roles: [
    'Forrest Gump',
    'Young Forrest Gump',
    'Jenny Curran',
    'Lieutenant Dan Taylor'
  ],
  orderOfAppearance(role) {
    return this.roles.indexOf(role) + 1;
  }
};
