/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let firstParsed = convertToNumber(firstNumber);
  let secParsed = convertToNumber(secondNumber);

  if (firstParsed === -secParsed) {
    return 0;
  }
  return firstParsed + secParsed;
};

let convertToNumber = value => {
  if (typeof value !== 'number') {
    let res = value.replaceAll(' ', '');
    return res * 1;
  }
  return value;
};
