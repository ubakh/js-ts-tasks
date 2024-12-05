/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  if (arr === null || arr.length <= 1) {
    return 0;
  }
  return new Set(arr).size;
};
