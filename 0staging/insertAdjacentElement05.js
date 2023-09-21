// Use insertAdjacentElement to insert a new span element with the class "highlight" immediately before the first h1 element in the document.

const newSpan = document.createElement('span')
newSpan.className = 'highlight'
const targetHeading = document.querySelector('h1')
targetHeading.insertAdjacentElement('beforebegin', newSpan)
