//Select all elements with the class "toggle-me" and toggle their visibility by changing their display property between "none" and "block" in a single line of JavaScript code using querySelectorAll

document
  .querySelectorAll('.toggle-me')
  .forEach(
    t => (t.style.display = t.style.display === 'none' ? 'block' : 'none')
  )
