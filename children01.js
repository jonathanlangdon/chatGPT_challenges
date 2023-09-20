// Modify the background color of all child elements of a div with the ID "parentDiv" to yellow using JavaScript and the .children property.

const childrenToChange = [...document.querySelector('#parentDiv').children]
childrenToChange.forEach(x => (x.style.background = 'yellow'))
