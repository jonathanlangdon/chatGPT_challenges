// rotate frog images

const directions = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
};

window.addEventListener('load', function () {
  const canvas = document.querySelector('canvas');
  drawFrog(canvas, 50, 50, directions.UP);
  drawFrog(canvas, 180, 50, directions.DOWN);
  drawFrog(canvas, 50, 180, directions.LEFT);
  drawFrog(canvas, 180, 180, directions.RIGHT);
});

function drawFrog(canvas, x, y, direction = directions.UP) {
  const ctx = canvas.getContext('2d');
  const frogImg = document.querySelector('img');
  ctx.translate(x + frogImg.width / 2, y + frogImg.height / 2);

  if (direction === directions.DOWN) {
    ctx.rotate(Math.PI);
  } else if (direction === directions.LEFT) {
    ctx.rotate(-Math.PI / 2);
  } else if (direction === directions.RIGHT) {
    ctx.rotate(Math.PI / 2);
  }

  ctx.drawImage(frogImg, -frogImg.width / 2, -frogImg.height / 2);
  ctx.resetTransform();
}
