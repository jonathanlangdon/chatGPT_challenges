//Add a throw statement to the processNumbers function for when elements are not a number

function processNumbers(numList) {
  let result = 0;

  for (let index = 0; index < numList.length; index++) {
    if (isNaN(numList[index])) {
      throw 'All elements in the list should be numbers.';
    }

    result += numList[index] * 1.3 * index;
  }

  return result;
}
