// Select all elements with the class "error" and change their background color to "red" and text color to "white" in a single line of JavaScript code using querySelectorAll.

document.querySelectorAll('.error').forEach(e => {
  e.style.background = 'red'
  e.style.color = 'white'
})
