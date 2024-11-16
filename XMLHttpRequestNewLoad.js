//Store a new XMLHttpRequest object in the xhr variable, then assign responseHandler function as the "load" event listener.

function responseHandler() {
  console.log('handling response: ' + this.responseText);
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', responseHandler);
