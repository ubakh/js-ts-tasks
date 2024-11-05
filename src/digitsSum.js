/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let workString = `${Math.abs(n)}`;
  let res = 0;
  const array = workString.split('');
  for (let index = 0; index < array.length; index++) {
    res += +array[index];
  }
  return res;
};
