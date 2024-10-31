// WordGame.js component for Worlde game

import React from 'react';
import { useState } from 'react';
import GuessedWords from './GuessedWords.js';

function WordGame(props) {
  const wordToGuess = props.word;
  const [currentGuess, setCurrentGuess] = useState('');
  const [numGuesses, setNumGuesses] = useState(1);
  const [wonGame, setWonGame] = useState(false);
  const [prevGuesses, setPrevGuesses] = useState([]);

  function handleKeyDown(e) {
    if (e.key === 'Enter' && currentGuess.length === 5) {
      setPrevGuesses(oldGuesses => [...oldGuesses, currentGuess]);
      if (wordToGuess === currentGuess) setWonGame(true);
      else setNumGuesses(oldNum => oldNum + 1);
      setCurrentGuess('');
    }
  }

  function handleChange(e) {
    if (/^[a-zA-Z]*$/.test(e.target.value)) {
      setCurrentGuess(e.target.value.toUpperCase());
    }
  }

  return (
    <>
      <GuessedWords wordToGuess={wordToGuess} words={prevGuesses} />
      <p>
        {wonGame ? (
          `Congratulations! It took you ${numGuesses} ${
            numGuesses > 1 ? 'tries' : 'try'
          }.`
        ) : (
          <>
            <label htmlFor="word-entry">Guess {numGuesses}:</label>
            <input
              type="text"
              id="word-entry"
              size="5"
              maxLength="5"
              value={currentGuess}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          </>
        )}
      </p>
    </>
  );
}

export default WordGame;
