// "Replace the first child of a `<div>` element with the id 'tree' on the page with a new paragraph element containing the text 'New Child'."

const oldChild = document.querySelector('#tree').firstElementChild
const newChild = document.createElement('p')
newChild.innerText = 'New Child'
document.querySelector('#tree').replaceChild(newChild, oldChild)
