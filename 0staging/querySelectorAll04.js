// Select all elements with the class "fade-me" and toggle their opacity between 0 and 1 (fade in/out) in a single line of JavaScript code using querySelectorAll

document
  .querySelectorAll('.fade-me')
  .forEach(x => (x.style.opacity = x.style.opacity === '1' ? '0' : '1'))
