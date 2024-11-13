let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  MORE_MOVES_LEFT: 1,
  HUMAN_WINS: 2,
  COMPUTER_WINS: 3,
  DRAW_GAME: 4
};

window.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
  const newBtn = document.getElementById('newGameButton');
  newBtn.addEventListener('click', newGame);
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.addEventListener('click', function () {
      boardButtonClicked(button);
    });
  }
  newGame(); // Clear the board
}

function getGameBoardButtons() {
  return document.querySelectorAll('#gameBoard > button');
}

function checkForWinner() {
  const buttons = getGameBoardButtons();

  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6] // diagonals
  ];

  for (let indices of possibilities) {
    if (
      buttons[indices[0]].innerHTML !== '' &&
      buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
      buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML
    ) {
      if (buttons[indices[0]].innerHTML === 'X') {
        return gameStatus.HUMAN_WINS;
      } else {
        return gameStatus.COMPUTER_WINS;
      }
    }
  }

  // See if any more moves are left
  for (let button of buttons) {
    if (button.innerHTML !== 'X' && button.innerHTML !== 'O') {
      return gameStatus.MORE_MOVES_LEFT;
    }
  }

  // If no winner and no moves left, then it's a draw
  return gameStatus.DRAW_GAME;
}

function newGame() {
  const board = document.getElementById('gameBoard');
  Array.from(board.children).forEach(button => {
    button.innerText = '';
    button.className = '';
  });
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;
  playerTurn = false;
  switchTurn();
}

function boardButtonClicked(button) {
  button.innerText = 'X';
  button.classList.add('x');
  button.disabled = true;
  switchTurn();
}

function switchTurn() {
  const gameState = checkForWinner();
  const turnInfo = document.getElementById('turnInfo');
  const board = document.getElementById('gameBoard');

  if (gameState === 1) {
    playerTurn = !playerTurn;
    // disable all buttons if computer turn
    if (!playerTurn) {
      disableAllButtons();
    } else {
      Array.from(board.children).forEach(button => {
        if (button.innerText === '') button.disabled = false;
      });
    }
    turnInfo.innerText = `${playerTurn ? 'Your turn' : "Computer's turn"}`;
    if (!playerTurn) {
      computerMoveTimeout = setTimeout(() => makeComputerMove(), 1000);
    }
    return;
  }
  disableAllButtons();
  playerTurn = false;
  turnInfo.innerText = `${
    gameState === 2
      ? 'You win!'
      : gameState === 3
      ? 'Computer wins!'
      : 'Draw game'
  }`;
}

// let playerTurn = true;
// let computerMoveTimeout = 0;

function makeComputerMove() {
  // Index numbering:
  //   1  2  3
  //   4  5  6
  //   7  8  9
  // gets array of available indices
  const availButtons = getAvalaibleButtons(getArrButtons());
  // pick random availButton (gets an index of 0-8) (won't have 9 indices)
  const nextIndexMove =
    availButtons[Math.floor(Math.random() * availButtons.length)];
  const board = document.getElementById('gameBoard');
  // Find nextIndexMove button (nth child 1-9)
  const nextButtonMove = board.querySelector(
    `button:nth-child(${nextIndexMove + 1})`
  );
  nextButtonMove.innerText = 'O';
  nextButtonMove.classList.add('o');
  nextButtonMove.disabled = true;
  switchTurn();
}

function getAvalaibleButtons(arr) {
  const openIndices = [];
  arr.forEach((button, index) => {
    if (button === '') openIndices.push(index);
  });
  return openIndices;
}

function getArrButtons() {
  const board = document.getElementById('gameBoard');
  const buttons = [];
  Array.from(board.children).forEach(button => buttons.push(button.innerText));
  return buttons;
}

const disableAllButtons = () => {
  const board = document.getElementById('gameBoard');
  Array.from(board.children).forEach(button => (button.disabled = true));
};
