//Append textNode to listItem as a child, and append listItem to parentTag as a child.

let parentTag = document.getElementById('list');
let listItem = document.createElement('li');
let textNode = document.createTextNode('Joe');

listItem.appendChild(textNode);
parentTag.appendChild(listItem);
