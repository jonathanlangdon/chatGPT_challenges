// Create a new <button> element, set its text content to "Click Me," and add a click event listener that shows an alert with the message "Button Clicked!" when clicked, all in a single line of JavaScript code using createElement and addEventListener

const newButton = document.createElement('button')
newButton.innerText = 'Click Me'
newButton.addEventListener('click', () => alert('Button Clicked!'))
