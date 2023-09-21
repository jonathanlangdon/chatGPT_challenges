// Create a function that takes a user input string, creates a text node using `createTextNode`, and appends it as a new `div` element to a parent container with the ID `#text-container` in your HTML document.

function appendInputString(inputString) {
  if (typeof inputString !== 'string') {
    console.log('Error: inputString not valid')
    return
  }
  const newDiv = document.createElement('div')
  const newTextNode = document.createTextNode(inputString)
  newDiv.appendChild(newTextNode)
  const textContainer = document.querySelector('#text-container')
  textContainer.appendChild(newDiv)
}
