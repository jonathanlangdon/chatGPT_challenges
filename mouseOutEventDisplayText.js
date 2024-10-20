// displays "Event handled" on the console log when the h2 receives a mouseout event.

let h2Element = document.getElementsByTagName('h2')[0];

h2Element.addEventListener('mouseout', () => console.log('Event handled'));
