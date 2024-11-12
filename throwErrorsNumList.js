//Throw a RangeError exception if any of the numbers is greater than 50. Throw an Error exception if the parameter has less than 2 elements.

function processNumbers(numList) {
  let result = 0;
  if (numList.length < 2) throw Error('less than 2 elements');

  for (let index = 0; index < numList.length; index++) {
    if (numList[index] > 50) throw RangeError('item more than 50');
    result += numList[index] * 1.3 * index;
  }
  return result;
}
