// increases the count by 1 every 300 milliseconds. cancel the interval when the count displays 3.

let count = 0;
let counterElement = document.getElementById('counter');
counterElement.innerHTML = count;

const intervalID = setInterval(() => {
  count += 1;
  counterElement.innerHTML = count;
  if (count === 3) clearInterval(intervalID);
}, 300);
