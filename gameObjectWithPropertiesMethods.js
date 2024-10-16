// game object with properties and methods

const game = {
  winner: {
    name: '',
    score: 0
  },
  loser: {
    name: '',
    score: 0
  },
  getMarginOfVictory() {
    return this.winner.score - this.loser.score;
  },
  showSummary() {
    console.log(`${this.winner.name}: ${this.winner.score}`);
    console.log(`${this.loser.name}: ${this.loser.score}`);
    console.log(`Margin of victory: ${this.getMarginOfVictory()}`);
  }
};

game.winner.name = 'Broncos';
game.winner.score = 24;
game.loser.name = 'Panthers';
game.loser.score = 10;

game.showSummary();
