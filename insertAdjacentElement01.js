//Use insertAdjacentElement to add a new div element as a sibling immediately after an existing p element with the id "targetParagraph".

const newDiv = document.createElement('div')
const targetElement = document.querySelector('p#targetParagraph')
targetElement.insertAdjacentElement('afterend', newDiv)
