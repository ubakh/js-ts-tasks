/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  // let allValues = [];
  // arr.forEach(elem => {
  //   let value = isNaN(allValues.get(elem)) ? 0 : allValues.get(elem);
  //   allValues.set(elem, ++value);
  // });
  // let sortedValues =
  //     [allValues.entries()]
  //         .sort( (a , b) => a[1] - b[1]);
  // let biggerSequenceValue = sortedValues[sortedValues.length - 1].next();
  // let arrRes = [];
  // for (let counter = 0; counter < biggerSequenceValue.value[1] - 2; counter++) {
  //   arrRes.push(String(biggerSequenceValue.value[0]))
  // }
  // return arrRes;
  if (arr.length === 0) return [];

  let maxSequence = [arr[0]];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
  }

  if (currentSequence.length > maxSequence.length) {
    maxSequence = currentSequence;
  }
  return maxSequence;
};
