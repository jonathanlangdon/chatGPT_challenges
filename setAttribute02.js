// Select all <img> elements with the class "thumbnail" and change their alt attribute to "Thumbnail Image" in a single line of JavaScript code using setAttribute

document
  .querySelectorAll('img.thumbnail')
  .forEach(x => x.setAttribute('alt', 'Thumbnail Image'))
