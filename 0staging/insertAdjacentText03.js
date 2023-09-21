// Add a copyright notice at the end of an existing HTML element with the ID "footer".

const currentYear = new Date().getFullYear()
document
  .querySelector('#footer')
  .insertAdjacentText('beforeend', ` ©:${currentYear} Jonathan Langdon`)
