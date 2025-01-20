/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  let value = word;

  console.log('value' + value);
  function fillNumArray() {
    return Array.from(Array(10).keys()).map(e => String(e));
  }
  function checkNumber(value: string) {
    let allNumbers = fillNumArray();
    let givenArr = value.split('');

    for (const elem of allNumbers) {
      if (!givenArr.includes(elem)) {
        return false;
      }
    }
    return true;
  }

  if (typeof word === 'number') {
    return checkNumber(String(value));
  }

  function checkWord(value: string) {
    let givenArr: string[] = value.split('');
    let alphabet: string[] = [...'abcdefghijklmnopqrstuvwxyz'];
    for (const allLettersValue of alphabet) {
      if (!givenArr.includes(allLettersValue)) {
        return false;
      }
    }
    return true;
  }
  return checkWord(String(value).toLowerCase());
};
