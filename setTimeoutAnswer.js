//Write a setTimeout() function that reveals the answer after 2.5 seconds.

function giveAnswer() {
  let answerElement = document.getElementsByClassName('answer')[0];

  answerElement.style.display = 'block';
}

setTimeout(giveAnswer, 2500);
