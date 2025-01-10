/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
  return function sortValue(...values) {
    return values.sort((firstElem, secondElem) => {
      // why complain that there are no arg in a function
      // actual implementation is: sortComparator: function (a, b)
      return TestUtils.sortComparator(firstElem, secondElem);
    });
  };
};
