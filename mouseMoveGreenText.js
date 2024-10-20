// Write and register an event handler that changes the color of the h2 element to green on mousemove.

let h2Element = document.getElementsByTagName('h2')[0];

h2Element.addEventListener('mousemove', e => (e.target.style.color = 'green'));
