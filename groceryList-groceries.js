// grocercies.js for grocery list app

let GROCERY_LIST = [];

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#addBtn').addEventListener('click', addBtnClick);
  document.querySelector('#clearBtn').addEventListener('click', clearBtnClick);
  let tempList = loadList();
  if (tempList) {
    GROCERY_LIST = tempList;
  }

  if (GROCERY_LIST.length > 0) {
    for (let item of GROCERY_LIST) {
      showItem(item);
    }
  } else {
    enableClearButton(false);
  }
});

function enableClearButton(enabled) {
  document.querySelector('#clearBtn').disabled = !enabled;
}

function showItem(item) {
  let list = document.querySelector('ol');
  list.innerHTML += `<li>${item}</li>`;
}

function addBtnClick() {
  let itemTextInput = document.querySelector('#item');
  let item = itemTextInput.value.trim();
  if (item.length > 0) {
    enableClearButton(true);
    showItem(item);
    GROCERY_LIST.push(item);
    saveList(GROCERY_LIST);
  }

  itemTextInput.value = '';
  itemTextInput.focus();
}

function clearBtnClick() {
  enableClearButton(false);
  GROCERY_LIST.length = 0;
  const listItems = document.querySelector('ol');
  if (listItems) listItems.innerHTML = '';
  clearList();
}

function loadList() {
  const storedList = localStorage.getItem('list');
  return storedList ? JSON.parse(storedList) : [];
}

function saveList(groceryList) {
  localStorage.setItem('list', groceryList.toString());
}

function clearList() {
  localStorage.removeItem('list');
}
