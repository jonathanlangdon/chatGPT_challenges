// add a class named "highlighted" to all <p> elements inside a container with the ID "textContainer" when a button with the ID "highlightBtn" is clicked.

const paragraphs = document.querySelectorAll('#textContainer p')
const button = document.querySelector('#highlightBtn')
button.addEventListener('click', () => {
  paragraphs.forEach(x => x.classList.add('highlighted'))
})
