// GuessedWords component for Wordle game

import React from 'react';

function GuessedWord(props) {
  const words = props.words;
  const correctWord = props.wordToGuess;

  function letterColor(letter, letterIndex) {
    if (correctWord[letterIndex] === letter) return 'correct';
    if (correctWord.includes(letter)) return 'wrong-place';
    return 'not-part';
  }

  return (
    <>
      {words.map((word, wordIndex) => (
        <p key={wordIndex}>
          {word.split('').map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={letterColor(letter, letterIndex)}
            >
              {letter}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export default GuessedWord;
