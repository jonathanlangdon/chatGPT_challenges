//calculate the sum of pixelAmount and the given element's cssProperty value, and return the new "px" value

function addPixels(element, cssProperty, pixelAmount) {
  /* Your solution goes here */
}

const helloElem = document.querySelector('#helloMessage');
const newVal = addPixels(helloElem, 'width', 50);
helloElem.style.setProperty('width', newVal);
