/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  // Volume V = (1/3) * π * radius2 * height
  let height = h;
  let radius = r;
  return ((1 / 3) * Math.PI * Math.pow(radius, 2) * height).toFixed(2);
};
