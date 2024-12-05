/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  let hasProp = prop in object;
  if (!hasProp) {
    return object.hasOwnProperty(prop);
  }
  return hasProp;
};
