// when hovering over an element with the ID "hoverMe", add a class named "hovered" to it, and remove the class when the mouse is no longer hovering over the element.

const target = document.querySelector('#hoverMe')

target.addEventListener('mouseover', () => {
  target.classList.add('hovered')
})
target.addEventListener('mouseout', () => {
  target.classList.remove('hovered')
})
