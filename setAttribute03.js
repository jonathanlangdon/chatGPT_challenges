//Select all links (<a>) with the class "external-link" and change their target attribute to "_blank" to open them in a new tab/window in a single line of JavaScript code using setAttribute.

document
  .querySelectorAll('a.external-link')
  .forEach(x => x.setAttribute('target', '_blank'))
