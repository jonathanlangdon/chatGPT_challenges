// useState hook - React component practice

import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  return (
    <>
      <h1>Movie Trivia</h1>
      <p>Which movie won the Academy Award for Best Picture in 2020?</p>
      <button onClick={() => setResult('Not quite!')}>1917</button>
      <button onClick={() => setResult('Wrong!')}>Ford v Ferrari</button>
      <button onClick={() => setResult('Correct!')}>Parasite</button>
      <button onClick={() => setResult('Nope!')}>Joker</button>
      <button onClick={() => setResult('No way!')}>Jurassic Park</button>
      <p>{result}</p>
    </>
  );
}

export default App;
