//Create a JavaScript one-liner that retrieves the first direct child element of an HTML element with the ID parentElement and adds a CSS class named "highlight" to it.

const toHighlight = document.querySelector('#parentElement').firstElementChild
toHighlight.className = 'highlight'
