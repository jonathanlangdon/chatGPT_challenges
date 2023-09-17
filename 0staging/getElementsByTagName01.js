// Select all <h2> elements on the page and change their text content to "New Heading" in a single line of JavaScript code using getElementsByTagName

const h2Elements = [...document.getElementsByTagName('h2')]
h2Elements.forEach(x => (x.innerText = 'New Heading'))
