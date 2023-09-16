// Select all the paragraphs (<p>) with the class "highlight" and change their text content to "Highlighted Paragraph" in a single line of JavaScript code using querySelectorAll.

document
  .querySelectorAll('p.highlight')
  .forEach(p => (p.innerText = 'Highlighted Paragraph'))
