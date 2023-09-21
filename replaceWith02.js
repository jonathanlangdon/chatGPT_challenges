// Create a one-liner JavaScript function that finds the first li element inside an unordered list with the ID #myList and uses replaceWith to replace it with a new li element containing the text "I am the new item".

function replaceFirstListItem() {
  const theList = document.querySelector('#myList')
  const newItem = document.createElement('li')
  newItem.innerText = 'I am the new item'
  theList.firstElementChild.replaceWith(newItem)
}
