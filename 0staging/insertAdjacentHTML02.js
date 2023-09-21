//Create a function in JavaScript that takes a string of text and a color as parameters, then uses `insertAdjacentHTML` to add this text as a new paragraph element with the specified color to the end of the body of your HTML document.

function coloredParagraph(givenText, givenColor) {
  const newText = document.createElement('p')
  newText.innerText = givenText
  newText.style.color = givenColor
  document.body.insertAdjacentHTML('beforeend', newText.outerHTML)
}
