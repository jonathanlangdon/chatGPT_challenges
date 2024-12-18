//setInterval() function that updates the progress bar every 100 milliseconds.

const progressIndicator = document.getElementById('progress');
let progress;
let timerId;

let startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startDownload);

function updateProgressBar() {
  progress += 20;
  progressIndicator.style.width = progress + 'px';

  if (progress >= 100) {
    clearInterval(timerId);
  }
}

function startDownload() {
  progress = 0;
  progressIndicator.style.width = progress;
  timerId = setInterval(updateProgressBar, 100);
}
