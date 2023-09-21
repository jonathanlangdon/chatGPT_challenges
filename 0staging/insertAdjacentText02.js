// Add today's date at the beginning of an existing HTML element with the ID "dateElement"

const currentDate = new Date()
document
  .querySelector('#dateElement')
  .insertAdjacentText('beforebegin', currentDate.toLocaleDateString())
