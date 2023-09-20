// Create a JavaScript one-liner that appends a new div element with the text "Hello, World!" as its content to an HTML element with the ID containerElement.

const newDiv = document.createElement('div')
newDiv.innerText = 'Hello, World!'
document.querySelector('#containerElement').appendChild(newDiv)
