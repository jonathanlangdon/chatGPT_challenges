// create bar graph of grade distribution

const parseScores = scoresString => scoresString.split(' ');

function buildDistributionArray(scoresArray) {
  const distArr = [0, 0, 0, 0, 0]; // [A, B, C, D, F]
  scoresArray.forEach(n => {
    distArr[n >= 90 ? 0 : n >= 80 ? 1 : n >= 70 ? 2 : n >= 60 ? 3 : 4] += 1;
  });
  return distArr;
}

function setTableContent(userInput) {
  const scoreArr = parseScores(userInput);
  const gradesArr = buildDistributionArray(scoreArr);
  const firstRow = document.getElementById('first-row'); // holds colored bar graph
  const thirdRow = document.getElementById('third-row'); // hold numerical value
  gradesArr.forEach((gradeDist, index) => {
    const tDiv = document.createElement('div');
    tDiv.className = `bar${index}`;
    tDiv.style.height = `${gradeDist * 10}px`;
    const td1 = document.createElement('td');
    td1.append(tDiv);
    firstRow.append(td1);
    const td3 = document.createElement('td');
    td3.append(`${gradeDist}`);
    thirdRow.append(td3);
  });
}

console.log(
  buildDistributionArray(['45', '78', '98', '83', '86', '99', '90', '59'])
); // [3, 2, 1, 0, 2]
setTableContent('45 78 98 83 86 99 90 59');
