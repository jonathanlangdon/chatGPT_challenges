// Select all elements with the class "hidden" and toggle their visibility by changing their display property between "none" and "block" in a single line of JavaScript code using getElementsByClassName

document
  .getElementsByClassName('hidden')
  .forEach(
    x => (x.style.display = x.style.display === 'none' ? 'block' : 'none')
  )
