// "Locate the second list item (`<li>`) of an unordered list (`<ul>`) with id 'pig' on the page and replaces it with a new list item containing the text 'Replaced Item' and class 'mx auto'."

const oldItem = document.querySelector('#pig li:nth-child(2)')
const newItem = document.createElement('li')
newItem.innerText = 'Replaced Item'
newItem.className = 'mx auto'
document.querySelector('#pig').replaceChild(newItem, oldItem)
