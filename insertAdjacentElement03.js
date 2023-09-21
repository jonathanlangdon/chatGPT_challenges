// Use insertAdjacentElement to insert a new ul (unordered list) element with three li (list item) elements inside an existing div element with the id "listContainer." The ul should be inserted as the last child of the div.

const newList = document.createElement('ul')
for (let i = 0; i < 3; i++) {
  newList.appendChild(document.createElement('li'))
}
const targetContainer = document.querySelector('div#listContainer')
targetContainer.insertAdjacentElement('beforeend', newList)
