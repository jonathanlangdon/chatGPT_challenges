//Register the textLength event handler to handle blur changes for the input element.

let inputElement = document.getElementById('studentName');

function textLength(event) {
  document.getElementById('stringLength').innerHTML = event.target.value.length;
}

inputElement.addEventListener('blur', textLength);
