// Add "Hello, World!" after an existing HTML element with the ID "myElement" using insertAdjacentText.

document
  .querySelector('#myElement')
  .insertAdjacentText('afterend', 'Hello, World!')
