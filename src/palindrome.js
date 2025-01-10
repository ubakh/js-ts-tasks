/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function (str) {
    function isAlphanumeric(elem) {
      return !(
        !(elem > 47 && elem < 58) && // numeric (0-9)
        !(elem > 64 && elem < 91) && // upper alpha (A-Z)
        !(elem > 96 && elem < 123)
      );
    }
    this.str = str
      .split('')
      .map(elem => {
        if (isAlphanumeric(elem.charCodeAt(0))) {
          return elem;
        }
        return null;
      })
      .map(value => {
        if (value === value + ''.toUpperCase()) {
          return value.toLowerCase();
        }
      })
      .filter(elem => {
        return elem != null || elem === 'null';
      })
      .join('')
      .toString()
      .replaceAll('null', '');
    return TestUtils.isPalindrome.call(this);
  };
};
