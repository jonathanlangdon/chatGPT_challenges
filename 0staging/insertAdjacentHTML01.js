// Create a dynamic navigation menu by using `insertAdjacentHTML` to add new menu items, fetched from an API, as list elements to an unordered list in the DOM.

function addToMenu(itemHTML) {
  const menu = document.querySelector('.dynamic-menu')
  menu.insertAdjacentHTML('beforeend', itemHTML)
}
