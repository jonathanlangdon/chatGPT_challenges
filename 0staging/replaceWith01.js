// Create a one-liner function that selects an element with the ID `#old-element` and uses `replaceWith` to replace it with a new paragraph element containing the text "Replacement Text".

const newPar = document.createElement('p')
newPar.innerText = 'Replacement Text'
document.querySelector('#old-element').replaceWith(newPar)
