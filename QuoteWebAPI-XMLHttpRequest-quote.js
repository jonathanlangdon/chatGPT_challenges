window.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('#fetchQuotesBtn')
    .addEventListener('click', function () {
      // Get values from drop-downs
      const topicDropdown = document.querySelector('#topicSelection');
      const selectedTopic =
        topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector('#countSelection');
      const selectedCount =
        countDropdown.options[countDropdown.selectedIndex].value;

      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
    });
});

function fetchQuotes(topic, count) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
  xhr.open('GET', url);
  xhr.addEventListener('load', () => responseReceivedHandler.call(xhr));
  xhr.addEventListener('error', () => responseReceivedHandler.call(xhr));
  xhr.send();
}

function responseReceivedHandler() {
  const quoteBox = document.getElementById('quotes');
  quoteBox.innerHTML = '';
  if (!this.response) {
    quoteBox.innerText = 'No response received.';
    return;
  }
  if (this.response.error) {
    quoteBox.innerText = this.response.error;
    return;
  }
  const ol = document.createElement('ol');
  this.response.forEach(quoteObject => {
    const li = document.createElement('li');
    li.innerText = `${quoteObject.quote} - ${quoteObject.source}`;
    ol.appendChild(li);
  });
  quoteBox.appendChild(ol);
}
