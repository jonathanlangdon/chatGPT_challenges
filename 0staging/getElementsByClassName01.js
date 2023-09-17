// Select all elements with the class "highlight" and change their background color to "yellow" using getElementsByClassName in a single line of JavaScript code.

document
  .getElementsByClassName('highlight')
  .forEach(x => (x.style.background = 'yellow'))
