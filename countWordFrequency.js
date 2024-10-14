// output words and their frequencies to the console.

function calcWordFrequencies(words) {
  const wordsSet = new Set(words.split(' '));
  wordsSet.forEach(word => {
    const regexExp = new RegExp(`\\b${word}\\b`);
    console.log(`${word} ${words.split(regexExp).length - 1}`);
  });
}

calcWordFrequencies('hey hi Mark hi mark');
