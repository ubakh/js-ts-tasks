/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  const stringOneLength = str1.length;
  const stringTwoLength = str2.length;
  let maxLength = 0;
  let endingIndex = 0;

  const twoDimArray = Array.from({ length: stringOneLength + 1 }, () => Array(stringTwoLength + 1).fill(0));

  for (let i = 1; i <= stringOneLength; i++) {
    for (let j = 1; j <= stringTwoLength; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        twoDimArray[i][j] = twoDimArray[i - 1][j - 1] + 1;
        if (twoDimArray[i][j] > maxLength) {
          maxLength = twoDimArray[i][j];
          endingIndex = i;
        }
      }
    }
  }

  return str1.slice(endingIndex - maxLength, endingIndex);
};
