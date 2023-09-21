//Create a one-liner function that uses `createTextNode` to add a user's input string as a new text node to an existing element with the ID `#text-output` in your HTML document.

function addUserText(userText) {
  const textTarget = document.querySelector('#text-output')
  const newText = document.createTextNode(userText)
  textTarget.appendChild(newText)
}
