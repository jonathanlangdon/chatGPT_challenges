//"Write a one-liner JavaScript code that toggles the visibility of all paragraph elements on a page when any button on the page is clicked."

function toggleParagraphs() {
  const allParagraphs = document.querySelectorAll('p')
  if (allParagraphs.style.visibility === 'hidden') {
    allParagraphs.forEach(x => (x.style.visibility = 'visible'))
  } else {
    allParagraphs.forEach(x => (x.style.visibility = 'hidden'))
  }
}

document
  .querySelectorAll('button')
  .forEach(x => x.addEventListener('click', toggleParagraphs))
