// Create a button that, when clicked, uses `insertAdjacentElement` to add a new paragraph saying "Hello, World!" below itself.

const newButton = document.createElement('button')
newButton.innerText = 'Add "Hello, World!"'

function addHelloWorld() {
  const newPar = document.createElement('p')
  newPar.innerText = 'Hello, World!'
  newButton.insertAdjacentElement('afterend', newPar)
}

newButton.onclick = addHelloWorld

document.body.appendChild(newButton)
