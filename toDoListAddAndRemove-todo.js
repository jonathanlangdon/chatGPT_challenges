window.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
  const addButton = document.getElementById('add-btn');
  const taskInput = document.getElementById('new-task');
  addButton.addEventListener('click', addBtnClick);
  taskInput.addEventListener('keyup', e =>
    e.key === 'Enter' ? addBtnClick() : null
  );
}

function addBtnClick() {
  const taskInput = document.getElementById('new-task');
  if (!(taskInput.value.trim() === '')) addTask(taskInput.value);
  taskInput.value = '';
  taskInput.focus();
}

function addTask(task) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'task-text';
  span.innerText = task;
  const button = document.createElement('button');
  button.className = 'done-btn';
  button.innerHTML = '&#10006;';
  button.addEventListener('click', removeTask);
  li.appendChild(span);
  li.appendChild(button);
  document.querySelector('ol').appendChild(li);
}

function removeTask(event) {
  document.querySelector('ol').removeChild(event.target.parentNode);
}
