//"Craft a one-liner JavaScript snippet to replace the outerHTML of the last child element within the first unordered list (`<ul>`) on the page, with a new list item (`<li>`) containing the text 'Appended Item'."

document.querySelector('ul').lastElementChild.outerHTML =
  '<li>Appended Item</li>'

//OR

document.querySelector('ul:first-child li:last-child').outerHTML =
  '<li>Appended Item</li>'
