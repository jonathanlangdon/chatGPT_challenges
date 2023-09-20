// Create a JavaScript one-liner that appends a new <p> element with the text "Special paragraph" to an HTML element with the ID containerElement.

const newParagraph = document.createElement('p')
newParagraph.innerText = 'Special paragraph'
document.querySelector('#containerElement').appendChild(newParagraph)
