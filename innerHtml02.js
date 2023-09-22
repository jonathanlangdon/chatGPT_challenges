// "Craft a JavaScript one-liner to set the innerHTML of the first `<div>` element in the document to display the current date and time in a human-readable format."

const currentDate = new Date().toLocaleString()
document.querySelector(
  'div:first-child'
).innerHTML = `<p>Current Date and Time: ${currentDate}</p>`
