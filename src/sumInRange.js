/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let res = 0;

  let min = Math.min(start, end);
  let max = Math.max(start, end);

  for (let i = min; i <= max; i++) {
    res += i;
  }
  return res;
};
