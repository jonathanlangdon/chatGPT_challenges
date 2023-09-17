// Create a new <input> element of type "text," set its placeholder to "Enter your name," and add it to a <form> element with the ID "myForm" in a single line of JavaScript code using createElement and appendChild

const newInput = document.createElement('input')
newInput.type = 'text'
newInput.placeholder = 'Enter your name'
document.querySelector('form#myForm').appendChild(newInput)
