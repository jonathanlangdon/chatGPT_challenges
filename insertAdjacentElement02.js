// Use `insertAdjacentElement` to insert an `img` element before an existing `h2` element with the class "image-title".

const newImg = document.createElement('img')
const targetHeading = document.querySelector('h2.image-title')
targetHeading.insertAdjacentElement('beforebegin', newImg)
