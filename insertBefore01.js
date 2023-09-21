// Create a function that uses `insertBefore` to add a new list item at the beginning of an unordered list with the ID `#item-list` in the DOM.

function addListItem(itemText) {
  if (typeof itemText !== 'string') {
    console.log('Error: list item input invalid')
    return
  }
  const itemList = document.querySelector('#item-list')
  const newItem = document.createElement('li')
  newItem.innerText = itemText
  itemList.insertBefore(newItem, itemList.firstChild)
}
