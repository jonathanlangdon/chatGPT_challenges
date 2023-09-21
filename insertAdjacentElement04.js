// Challenge: Use insertAdjacentElement to insert a new div element with the class "message" immediately after the first p element within a div with the class "content-container." If there are no p elements inside the "content-container," create a new p element inside it and then insert the div element after it.

const newDiv = document.createElement('div.message')
newDiv.innerText = 'This is it. We have to do it'
let targetEl = document.querySelector('div.content-container p')
if (!targetEl) {
  const newParagraph = document.createElement('p')
  document.querySelector('div.content-container').appendChild(newParagraph)
  targetEl = newParagraph
}
targetEl.insertAdjacentElement('afterend', newDiv)
