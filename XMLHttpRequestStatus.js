//Log "unauthorized" to the console if the response's status is 401. Otherwise, log "not unauthorized" to the console.

function responseReceivedHandler() {
  if (this.status === 401) console.log('unauthorized');
  else console.log('not unauthorized');
}

let xhr = new XMLHttpRequest();
xhr.addEventListener('load', responseReceivedHandler);
xhr.addEventListener('error', responseReceivedHandler);
xhr.open('GET', 'https://wp.zybooks.com/weather.php?zip=90210');
xhr.send();
