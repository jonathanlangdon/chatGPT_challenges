let timerId = null;

window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', startAnimation);
});

function startAnimation(e) {
  if (timerId) clearInterval(timerId);
  let clickX = e.clientX;
  let clickY = e.clientY;
  timerId = setInterval(() => moveImage(clickX, clickY), 10);
}

function moveImage(x, y) {
  const img = document.querySelector('img');
  let imgX = parseInt(img.style.left);
  let imgY = parseInt(img.style.top);
  const centerX = Math.round(x - img.width / 2);
  const centerY = Math.round(y - img.height / 2);

  // stop intervalTimer moving if at target
  if (centerX === imgX && centerY === imgY) {
    clearInterval(timerId);
    timerId = null;
  }

  // Move 1 pixel in both directions toward the click
  if (imgX < centerX) {
    imgX++;
  } else if (imgX > centerX) {
    imgX--;
  }

  if (imgY < centerY) {
    imgY++;
  } else if (imgY > centerY) {
    imgY--;
  }

  img.style.left = imgX + 'px';
  img.style.top = imgY + 'px';
}
