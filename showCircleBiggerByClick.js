// practice with Promises and an animated circle

window.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('#showCircleBtn')
    .addEventListener('click', showCircleClick);
});

function showCircleClick() {
  const promise = showCircle(160, 180, 120);
  promise
    .then(result => {
      const circleDiv = document.querySelector('.circle');
      circleDiv.innerText = 'Ta da!';
    })
    .catch(error => {
      alert(error);
    });
}

let timerId = null;

function showCircle(cx, cy, radius) {
  let div = document.querySelector('div');
  if (div !== null) {
    div.parentNode.removeChild(div);
  }

  div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
  }, 10);

  let promise = new Promise(function (resolve, reject) {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
      div.parentNode.removeChild(div);
      reject('showCircle called too soon');
    } else {
      timerId = setTimeout(() => {
        resolve(div);
        timerId = null;
      }, 1000);
    }
  });

  return promise;
}
