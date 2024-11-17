//initialize a connection to GET https://wp.zybooks.com/todos.php?day=Monday, set the response type to text, then send the request.

function responseReceivedHandler() {
  console.log('Response received');
}

let xhr = new XMLHttpRequest();
xhr.addEventListener('load', responseReceivedHandler);
xhr.responseType = 'text';
xhr.open('GET', 'https://wp.zybooks.com/todos.php?day=Monday');
xhr.send();
