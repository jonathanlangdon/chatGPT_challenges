// Game.js for TickTackToe game that uses useState
import React, { useState } from 'react';
import GameGrid from './GameGrid.js';

function Game() {
  const [moves, setMoves] = useState(new Array(9).fill(''));
  const [turn, setTurn] = useState('X');

  function gridClick(whichSquare) {
    if (moves[whichSquare] !== '') return;

    setMoves(prevMoves => {
      const moves = [...prevMoves];
      moves[whichSquare] = turn;
      return moves;
    });
    // change turns
    setTurn(oldTurn => (oldTurn === 'X' ? 'O' : 'X'));
  }

  // reset grid to blank and turn back to 'X'
  function newGame() {
    setMoves(new Array(9).fill(''));
    setTurn('X');
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <GameGrid moves={moves} click={gridClick} />
      <p>
        Turn: <strong className={turn}>{turn}</strong>
      </p>
      <p>
        <button onClick={newGame}>New Game</button>
      </p>
    </>
  );
}

export default Game;
