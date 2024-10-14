//Assign newElement with a new h4 element. Assign textNode with a new textNode containing "Betty".

let parentTag = document.getElementById('list');

const newElement = document.createElement('h4');
const textNode = document.createTextNode('Betty');

newElement.appendChild(textNode);
parentTag.appendChild(newElement);
